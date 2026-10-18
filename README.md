# ⚡ Prajwal Y J - Personal Portfolio

A modern, high-performance personal portfolio built with **Next.js (App Router)**, **React**, **TypeScript**, and **Vanilla CSS**. Designed with rich aesthetics: glassmorphism, cyber-indigo glowing gradients, dynamic role typing, interactive project filtering, accessible modal previews, and dark/light mode toggle.

---

## 📁 Industry-Standard Folder Structure

```
portfolio_v1/
├── public/                       # Static public assets
│   └── images/                   # Project screenshots & developer avatar
│       ├── avatar.jpg
│       └── projects/
│           ├── ai-platform.jpg
│           ├── cloud-devops.jpg
│           ├── fintech-web.jpg
│           └── devtool-ide.jpg
├── src/                          # Application source code
│   ├── app/                      # Next.js App Router (Layout, Page, Global CSS)
│   │   ├── favicon.ico
│   │   ├── globals.css           # Design tokens, reset, glassmorphism & component styles
│   │   ├── layout.tsx            # Root layout with fonts, metadata & providers
│   │   └── page.tsx              # Landing page composing section components
│   ├── components/               # Modular React components
│   │   ├── index.ts              # Clean barrel exports
│   │   ├── sections/             # Page sections
│   │   │   ├── Hero.tsx          # Dynamic typing, 3D card tilt & live counters
│   │   │   ├── About.tsx         # Engineering philosophy & core pillars
│   │   │   ├── Skills.tsx        # Categorized tech matrix & proficiencies
│   │   │   ├── Projects.tsx      # Filterable showcase with detail modal
│   │   │   ├── Experience.tsx    # Interactive career & education timeline
│   │   │   └── Contact.tsx       # Validated contact form & copy email action
│   │   └── ui/                   # Reusable UI widgets & chrome
│   │       ├── Navbar.tsx        # Sticky glass navbar, theme switch & mobile drawer
│   │       ├── Footer.tsx        # Clean footer with system status indicator
│   │       ├── ProjectModal.tsx  # Accessible deep-dive modal popup
│   │       ├── CursorGlow.tsx    # Ambient radial flashlight follower
│   │       ├── ScrollProgress.tsx# Window scroll progress indicator
│   │       └── BackToTop.tsx     # Smooth back-to-top floating button
│   ├── context/                  # React state providers & custom hooks
│   │   ├── index.ts              # Context barrel exports
│   │   ├── ThemeContext.tsx      # Dark / Light mode & Web Audio feedback
│   │   └── ToastContext.tsx      # Global toast notification dispatch
│   ├── data/                     # Centralized content store
│   │   └── portfolioData.ts      # Strongly-typed personal profile, skills & projects
│   └── types/                    # TypeScript interfaces & types
│       ├── index.ts              # Type barrel exports
│       └── portfolio.ts          # Schemas for Profile, Project, Skill, Timeline
├── next.config.ts                # Next.js compiler & caching configuration
├── tsconfig.json                 # TypeScript strict compiler configuration
├── package.json                  # Dependencies & npm scripts
└── README.md                     # Comprehensive project documentation
```

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack, Partial Prerendering)
- **Library**: [React](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling**: Vanilla CSS (Tailored HSL design tokens, Glassmorphism, Zero runtime overhead)
- **Fonts**: Google Fonts (`Plus Jakarta Sans`, `Inter`, `JetBrains Mono`) via `next/font`
- **Audio Feedback**: Native Web Audio API synthesized micro-clicks (no external sound files required)

---

## ⚙️ How to Customize Your Content

All data powering the portfolio is strictly typed and centralized in:
👉 [`src/data/portfolioData.ts`](src/data/portfolioData.ts)

You can easily update:
- Your name, title, bio, and social links
- Dynamic typing roles in the hero section
- Key statistics (projects, experience, commits)
- Technical skills grouped by categories
- Featured projects, tags, descriptions, live demo links, and GitHub repositories
- Career work experience and academic milestones

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 3. Build for Production
```bash
npm run build
```

### 4. Start Production Server
```bash
npm start
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: industry-standard Next.js portfolio"
   git push origin main
   ```
2. Import your repository in [Vercel](https://vercel.com/new).
3. Vercel automatically detects Next.js and deploys your website with global CDN caching.
