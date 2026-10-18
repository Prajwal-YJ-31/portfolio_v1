'use client';

import React, { useState, useEffect } from 'react';
import { portfolioData } from '@/data/portfolioData';

export const Footer: React.FC = () => {
  const { profile } = portfolioData;
  const [year, setYear] = useState('2026');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <a href="#hero" className="nav-brand" aria-label="Back to top">
            <div className="nav-brand-logo">P</div>
            <div className="nav-brand-text">Prajwal<span>.dev</span></div>
          </a>

          <div className="footer-links">
            <a href="#hero" className="footer-link">Home</a>
            <a href="#about" className="footer-link">About</a>
            <a href="#skills" className="footer-link">Skills</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#experience" className="footer-link">Experience</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {year} {profile.name}. Designed &amp; engineered with clean Next.js, React, and TypeScript.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="pulse-dot" style={{ width: 6, height: 6 }}></span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
};
