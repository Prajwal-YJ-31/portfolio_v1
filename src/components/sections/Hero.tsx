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
              A playground where code meets play.<br />
              Building immersive digital experiences.
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
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-anchor"
                title="GitHub"
                onClick={() => playClick(450)}
              >
                GH
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-anchor"
                title="LinkedIn"
                onClick={() => playClick(450)}
              >
                LN
              </a>
              <a
                href={profile.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-anchor"
                title="X / Twitter"
                onClick={() => playClick(450)}
              >
                𝕏
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
