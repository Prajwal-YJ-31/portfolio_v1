"""
remove_bg.py - Script to remove background from images.
Supports:
  1. AI-powered removal using rembg (U2-Net model)
  2. Boundary flood-fill with color tolerance & edge smoothing (using Pillow + NumPy)
"""

import sys
import os
import argparse
from PIL import Image, ImageFilter
import numpy as np
from collections import deque


def remove_background_ai(input_path: str, output_path: str) -> bool:
    """Removes image background using the rembg AI engine."""
    try:
        from rembg import remove
        print(f"Removing background using AI (rembg): {input_path} -> {output_path}")
        with open(input_path, 'rb') as inp_file:
            input_bytes = inp_file.read()
            output_bytes = remove(input_bytes)
        with open(output_path, 'wb') as out_file:
            out_file.write(output_bytes)
        print("Success! AI background removal completed.")
        return True
    except Exception as e:
        print(f"AI background removal failed: {e}")
        return False


def remove_background_floodfill(
    input_path: str,
    output_path: str,
    tolerance: int = 20,
    blur_radius: float = 1.0
) -> bool:
    """
    Removes outer background using boundary flood-fill (BFS).
    Protects inner white elements (like labels, papers, screens) by only
    erasing pixels connected to the outer border matching the background color.
    """
    try:
        print(f"Removing background using Boundary Floodfill: {input_path} -> {output_path}")
        img = Image.open(input_path).convert('RGB')
        w, h = img.size
        arr = np.array(img)

        # Reference background color from top-left corner
        bg_ref = arr[0, 0].astype(int)
        diff = np.max(np.abs(arr.astype(int) - bg_ref), axis=-1)

        # Pixels that closely match the outer background color
        candidate_bg = diff < tolerance

        # BFS starting exclusively from the image boundaries
        visited = np.zeros((h, w), dtype=bool)
        q = deque()

        for x in range(w):
            if candidate_bg[0, x]:
                visited[0, x] = True
                q.append((0, x))
            if candidate_bg[h - 1, x]:
                visited[h - 1, x] = True
                q.append((h - 1, x))

        for y in range(h):
            if candidate_bg[y, 0]:
                visited[y, 0] = True
                q.append((y, 0))
            if candidate_bg[y, w - 1]:
                visited[y, w - 1] = True
                q.append((y, w - 1))

        while q:
            y, x = q.popleft()
            for dy, dx in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                ny, nx = y + dy, x + dx
                if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx] and candidate_bg[ny, nx]:
                    visited[ny, nx] = True
                    q.append((ny, nx))

        # Invert visited to form alpha mask (visited border pixels become 0, foreground becomes 255)
        alpha = np.where(visited, 0, 255).astype(np.uint8)
        alpha_img = Image.fromarray(alpha, mode='L')
        if blur_radius > 0:
            alpha_img = alpha_img.filter(ImageFilter.GaussianBlur(radius=blur_radius))

        rgba = img.convert('RGBA')
        rgba.putalpha(alpha_img)
        rgba.save(output_path, format='PNG')
        print("Success! Transparent PNG saved.")
        return True
    except Exception as e:
        print(f"Floodfill removal failed: {e}")
        return False


def main():
    parser = argparse.ArgumentParser(description="Remove background from images.")
    parser.add_argument(
        "-i", "--input",
        default="public/images/skills.jpg",
        help="Path to input image (default: public/images/skills.jpg)"
    )
    parser.add_argument(
        "-o", "--output",
        default="public/images/skills-transparent.png",
        help="Path to output PNG (default: public/images/skills-transparent.png)"
    )
    parser.add_argument(
        "-m", "--method",
        choices=["auto", "ai", "floodfill"],
        default="auto",
        help="Removal method: 'ai' (rembg), 'floodfill' (Pillow), or 'auto'"
    )
    parser.add_argument(
        "-t", "--tolerance",
        type=int,
        default=20,
        help="Color tolerance for floodfill method (default: 20)"
    )

    args = parser.parse_args()

    if not os.path.exists(args.input):
        print(f"Error: Input file '{args.input}' not found.")
        sys.exit(1)

    os.makedirs(os.path.dirname(os.path.abspath(args.output)), exist_ok=True)

    if args.method == "ai":
        success = remove_background_ai(args.input, args.output)
    elif args.method == "floodfill":
        success = remove_background_floodfill(args.input, args.output, tolerance=args.tolerance)
    else:  # auto
        success = remove_background_ai(args.input, args.output)
        if not success:
            print("Falling back to boundary floodfill method...")
            success = remove_background_floodfill(args.input, args.output, tolerance=args.tolerance)

    if not success:
        sys.exit(1)


if __name__ == "__main__":
    main()
