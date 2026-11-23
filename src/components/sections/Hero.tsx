'use client';

import React from 'react';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolioData';
import { useTheme } from '@/context/ThemeContext';
import { LanyardIllustration } from '@/components';

export const Hero: React.FC = () => {
  const { profile } = portfolioData;
  const { playClick } = useTheme();

  return (
    <section className="hero-editorial" id="hero">
      {/* Background Ambience & Atmospheric Pastels */}
      <div className="hero-atmosphere" aria-hidden="true">
        <div className="hero-ambient-glow glow-left" />
        <div className="hero-ambient-glow glow-right" />
        <div className="hero-grid-lines" />
      </div>

      {/* Main Hero Viewport Container */}
      <div className="hero-editorial-container">
        {/* Main Center Area: Left Typography & Right Lanyard Card */}
        <div className="hero-main-row">
          {/* Left Column: Big Bold Typography */}
          <div className="hero-left-column">
            <div className="hero-title-block">
              <span className="hero-salutation">Hi, I am</span>
              <h1 className="hero-giant-name">Prajwal</h1>
            </div>
          </div>

          {/* Right Column: Lanyard Rig & ID Badge with Pendulum Movement */}
          <div className="hero-right-column">
            <div
              className="hero-pendulum-assembly is-swinging"
              id="hero-pendulum-rig"
            >
              {/* Lanyard Fabric Ribbon & Metal Hardware (Pure Vector Illustration) */}
              <div className="hero-lanyard-rig" aria-hidden="true">
                <LanyardIllustration className="hero-lanyard-svg" />
              </div>

              {/* The Angled ID Pass Badge with Pendulum Motion */}
              <div
                className="editorial-card-container"
                id="hero-id-card"
              >
                {/* Acrylic Clear Plastic Outer Holder */}
                <div className="acrylic-badge-holder">
                  {/* Top Tab with Clip Slot Cutouts */}
                  <div className="acrylic-tab-bar">
                    <span className="acrylic-side-slot" />
                    <span className="acrylic-center-slot" />
                    <span className="acrylic-side-slot" />
                  </div>

                  {/* Inside Card Body */}
                  <div className="inner-pass-card">
                    {/* Pastel Gradient Header */}
                    <div className="pass-header-banner" aria-hidden="true" />

                    {/* Avatar Image */}
                    <div className="pass-avatar-wrap">
                      <Image
                        src="/images/avatar.jpg"
                        alt={`${profile.name} - Portrait`}
                        width={280}
                        height={280}
                        priority
                        className="pass-avatar-img"
                      />
                    </div>

                    {/* Pass Details */}
                    <div className="pass-info-block">
                      <h2 className="pass-holder-name">PRAJWAL</h2>
                      <p className="pass-holder-role">Product designer and developer</p>
                    </div>

                    {/* Pass Footer: ID & Barcode */}
                    <div className="pass-card-footer">
                      <span className="pass-id-tag">ID #31</span>
                      <div className="pass-barcode-graphic" aria-hidden="true">
                        <svg width="68" height="18" viewBox="0 0 68 18" fill="currentColor">
                          <rect x="0" y="0" width="2" height="18" />
                          <rect x="3" y="0" width="1" height="18" />
                          <rect x="6" y="0" width="3" height="18" />
                          <rect x="11" y="0" width="1.5" height="18" />
                          <rect x="14" y="0" width="2" height="18" />
                          <rect x="18" y="0" width="3.5" height="18" />
                          <rect x="23" y="0" width="1" height="18" />
                          <rect x="26" y="0" width="2" height="18" />
                          <rect x="30" y="0" width="1.5" height="18" />
                          <rect x="33" y="0" width="3" height="18" />
                          <rect x="38" y="0" width="1" height="18" />
                          <rect x="41" y="0" width="2" height="18" />
                          <rect x="45" y="0" width="3.5" height="18" />
                          <rect x="50" y="0" width="1.5" height="18" />
                          <rect x="53" y="0" width="2" height="18" />
                          <rect x="57" y="0" width="1" height="18" />
                          <rect x="60" y="0" width="2.5" height="18" />
                          <rect x="64" y="0" width="3" height="18" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metadata & Navigation Row */}
        <div className="hero-bottom-row">
          <div className="hero-meta-left">
            <p className="hero-tagline-text">
              Bridging the gap between design systems &amp; code.<br />
              Turning complex ideas into intuitive products.
            </p>
            <span className="hero-location-badge">[BASED IN INDIA]</span>
          </div>

          <div className="hero-meta-center">
            <a
              href="#about"
              className="hero-scroll-link"
              onClick={() => playClick(500)}
            >
              SCROLL TO EXPLORE [ &darr; ]
            </a>
          </div>

          <div className="hero-meta-right">
            <div className="hero-social-links">
              <a
                href={profile.github || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-anchor"
                title="GitHub"
                aria-label="GitHub Profile"
                onClick={() => playClick(450)}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href={profile.linkedin || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-anchor"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
                onClick={() => playClick(450)}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={profile.behance || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-anchor"
                title="Behance"
                aria-label="Behance Profile"
                onClick={() => playClick(450)}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.715 4.908c1.383 0 2.477.348 3.284 1.043.806.696 1.21 1.63 1.21 2.802 0 .696-.155 1.32-.465 1.872-.31.552-.77.994-1.38 1.327.843.348 1.488.85 1.936 1.504.448.655.672 1.458.672 2.41 0 1.353-.454 2.434-1.362 3.243-.908.809-2.162 1.213-3.762 1.213H0V4.908h6.715zM3.434 7.644v3.535h3.045c.677 0 1.189-.148 1.536-.444.347-.296.521-.734.521-1.314 0-.594-.176-1.037-.528-1.33-.352-.293-.861-.447-1.529-.447H3.434zm0 6.133v4.062h3.332c.738 0 1.306-.168 1.704-.504.398-.336.597-.838.597-1.506 0-.696-.209-1.215-.627-1.557-.418-.342-1.008-.513-1.77-.513H3.434zm13.411-4.887c1.383 0 2.502.398 3.357 1.194.855.796 1.348 1.905 1.479 3.327h-7.659c.074.883.398 1.564.972 2.043.574.479 1.306.718 2.196.718.707 0 1.312-.132 1.815-.396.503-.264.9-.661 1.191-1.191l2.434 1.28c-.53 1.018-1.288 1.813-2.274 2.385-.986.572-2.164.858-3.534.858-1.604 0-2.95-.503-4.038-1.509-1.088-1.006-1.632-2.378-1.632-4.116 0-1.688.528-3.048 1.584-4.08 1.056-1.032 2.372-1.548 3.948-1.548zm-.045 2.479c-.662 0-1.206.21-1.632.63-.426.42-.684.99-.774 1.71h4.743c-.044-.734-.286-1.309-.726-1.724-.44-.415-1.002-.622-1.686-.622zM14.61 5.922h6.143v1.657H14.61V5.922z" />
                </svg>
              </a>
              <a
                href={profile.dribbble || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-anchor"
                title="Dribbble"
                aria-label="Dribbble Profile"
                onClick={() => playClick(450)}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c6.626 0 12-5.373 12-12S18.626 0 12 0zm7.844 7.235c.984 1.383 1.602 3.018 1.748 4.793-1.631-.413-3.411-.532-5.188-.328-.154-.424-.319-.844-.498-1.258 1.493-.787 2.805-1.854 3.938-3.207zm-7.844-4.835c2.434 0 4.646.947 6.305 2.493-1.042 1.25-2.261 2.24-3.646 2.973-1.077-2.023-2.39-3.864-3.905-5.466h1.246zm-2.859.957c1.472 1.564 2.748 3.36 3.793 5.334-1.928.74-4.024 1.156-6.19 1.217C5.372 7.72 6.556 5.253 9.141 3.357zm-6.74 6.74c2.518-.08 4.954-.567 7.186-1.428.169.39.324.787.469 1.189-2.906 1.094-5.26 3.047-6.845 5.617C2.476 13.914 2.4 12.38 2.4 10.097zm1.889 7.426c1.378-2.316 3.447-4.093 6.046-5.112.569 1.524 1.002 3.123 1.282 4.773-3.023 1.158-5.594.757-7.328.339zm9.055 3.337c-.317-1.523-.742-3.007-1.272-4.428 1.637-.179 3.279-.06 4.78.331-1.002 1.83-2.228 3.23-3.508 4.097z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
