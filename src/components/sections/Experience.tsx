'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';

export const Experience: React.FC = () => {
  const { experience, education } = portfolioData;

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 14, height: 14 }}>
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            Career Milestones
          </div>
          <h2 className="section-title">
            Experience &amp; <span className="text-gradient">Education</span>
          </h2>
          <p className="section-subtitle">
            My professional evolution, internships, and academic foundation in Computer Science.
          </p>
        </div>

        <div className="timeline-section-grid">
          {/* Column 1: Experience */}
          <div className="timeline-column">
            <h3 className="timeline-column-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              Work Experience
            </h3>

            <div className="timeline-wrapper">
              {experience.map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-node"></div>
                  <div className="timeline-content-card">
                    <div className="timeline-meta">
                      <span className="timeline-period">{item.period}</span>
                    </div>
                    <h4 className="timeline-role">{item.role}</h4>
                    <div className="timeline-org">{item.company}</div>
                    <ul className="timeline-bullets">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Education */}
          <div className="timeline-column">
            <h3 className="timeline-column-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
              Education &amp; Credentials
            </h3>

            <div className="timeline-wrapper">
              {education.map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-node"></div>
                  <div className="timeline-content-card">
                    <div className="timeline-meta">
                      <span className="timeline-period">{item.period}</span>
                    </div>
                    <h4 className="timeline-role">{item.role}</h4>
                    <div className="timeline-org">{item.company}</div>
                    <ul className="timeline-bullets">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              <div className="timeline-item">
                <div className="timeline-node"></div>
                <div className="timeline-content-card">
                  <div className="timeline-meta">
                    <span className="timeline-period">CREDENTIALS</span>
                  </div>
                  <h4 className="timeline-role">Professional Certifications</h4>
                  <div className="timeline-org">Continuous Learning</div>
                  <ul className="timeline-bullets">
                    <li>AWS Certified Cloud Practitioner / Modern Cloud Architecture.</li>
                    <li>Full-Stack Web Development Specialization (Deep React &amp; Node Systems).</li>
                    <li>Algorithmic Problem Solving &amp; Data Structures Proficiency.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
