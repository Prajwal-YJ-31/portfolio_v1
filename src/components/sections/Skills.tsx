'use client';

import React from 'react';
import Image from 'next/image';

export const Skills: React.FC = () => {
  return (
    <div
      id="skills"
      className="skills-1920-container"
      style={{
        width: '1920px',
        height: 'fit-content',
      }}
    >
      {/* Div 1: For Text */}
      <div className="skills-text-column">
        <div className="skills-text-wrapper">
          <h2 className="skills-main-heading">
            Skills &amp; <span className="text-gradient">Experties</span>
          </h2>

          <p className="skills-inventory-description">
            A thoughtfully curated inventory of skills and creative disciplines—spanning code, full-stack architecture, UI/UX design systems, cloud infrastructure, and AI workflows. Organized modularly like an engineering workshop, each tool and framework is mastered to build intuitive, resilient, and production-grade digital products.
          </p>
        </div>
      </div>

      {/* Div 2: For Img */}
      <div className="skills-img-column">
        <div className="skills-img-frame">
          <Image
            src="/images/skills.jpg"
            alt="Skills &amp; Technologies Organizer Workspace"
            width={1024}
            height={934}
            priority
            className="skills-main-img"
          />
        </div>
      </div>
    </div>
  );
};
