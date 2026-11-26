'use client';

import React from 'react';
import Image from 'next/image';

export const Experience: React.FC = () => {
  return (
    <section className="section" id="experience">
      <div className="container">
        {/* Two Containers for The Journey Header */}
        <div className="journey-header-wrapper">
          {/* Container 1: Title */}
          <div className="journey-title-container">
            <h2 className="journey-main-title">
              The <span className="text-gradient">Journey</span>
            </h2>
          </div>

          {/* Container 2: Small Subtext */}
          <div className="journey-subtext-container">
            <p className="journey-subtext">
              A visual roadmap of my professional evolution—from the day I threw my graduation cap to the digital landscapes I explore today.
            </p>
          </div>
        </div>

        {/* Visual Roadmap Strip with Extracted Buildings */}
        <div className="journey-buildings-roadmap">
          <div className="journey-building-card">
            <div className="journey-building-img-wrap">
              <Image
                src="/images/journey/crop_b1_rembg.png"
                alt="Sambhram Institute of Technology"
                width={335}
                height={285}
                className="journey-building-img"
              />
            </div>
            <div className="journey-building-info">
              <span className="journey-building-badge">2021 &ndash; 2025</span>
              <h4 className="journey-building-title">Sambhram Institute of Technology</h4>
              <p className="journey-building-subtitle">B.E. Computer Science Engineer</p>
            </div>
          </div>

          <div className="journey-step-connector" aria-hidden="true">
            <span className="journey-connector-arrow">&rarr;</span>
          </div>

          <div className="journey-building-card">
            <div className="journey-building-img-wrap">
              <Image
                src="/images/journey/crop_b2_rembg.png"
                alt="Freelance Hub"
                width={310}
                height={225}
                className="journey-building-img"
              />
            </div>
            <div className="journey-building-info">
              <span className="journey-building-badge">June 2025 &ndash; May 2026</span>
              <h4 className="journey-building-title">Freelancer</h4>
              <p className="journey-building-subtitle">Website Design &amp; Developer</p>
            </div>
          </div>

          <div className="journey-step-connector" aria-hidden="true">
            <span className="journey-connector-arrow">&rarr;</span>
          </div>

          <div className="journey-building-card">
            <div className="journey-building-img-wrap">
              <Image
                src="/images/journey/crop_b3_rembg.png"
                alt="Brikup Tech"
                width={310}
                height={275}
                className="journey-building-img"
              />
            </div>
            <div className="journey-building-info">
              <span className="journey-building-badge">May 2026 &ndash; Present</span>
              <h4 className="journey-building-title">Brikup Tech</h4>
              <p className="journey-building-subtitle">Software Developer Intern</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
