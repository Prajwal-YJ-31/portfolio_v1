'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';

export const About: React.FC = () => {
  const { profile } = portfolioData;

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 14, height: 14 }}>
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            Background &amp; Philosophy
          </div>
          <h2 className="section-title">
            Engineering with <span className="text-gradient">Purpose &amp; Passion</span>
          </h2>
          <p className="section-subtitle">
            A glimpse into my engineering mindset, problem-solving journey, and technical principles.
          </p>
        </div>

        <div className="about-grid">
          {/* Story & Pillars Card */}
          <div className="glass-card about-card">
            <p className="about-lead">
              &ldquo;Great software balances elegant architecture behind the scenes with intuitive, delightful interactions on the glass.&rdquo;
            </p>
            <p>
              I am a Computer Science &amp; Engineering graduate and software developer based in {profile.location}. Over the years, I&apos;ve developed a profound enthusiasm for architecting end-to-end applications that solve tangible human challenges.
            </p>
            <p>
              From architecting containerized microservices to designing responsive, accessible web interfaces and integrating AI models, I enjoy every phase of product engineering.
            </p>

            {/* 4 Engineering Pillars */}
            <div className="pillars-grid">
              <div className="pillar-item">
                <div className="pillar-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3 className="pillar-title">Clean Code</h3>
                <p className="pillar-desc">Modular, self-documenting code with rigorous typing and architectural integrity.</p>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                  </svg>
                </div>
                <h3 className="pillar-title">Performance</h3>
                <p className="pillar-desc">Fast load times, minimal bundles, and optimized database indexing &amp; caching.</p>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3 className="pillar-title">Modern UX</h3>
                <p className="pillar-desc">Fluid micro-interactions, responsive accessibility, and cohesive design systems.</p>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </div>
                <h3 className="pillar-title">Continuous Growth</h3>
                <p className="pillar-desc">Constantly exploring cutting-edge tools, AI integrations, and cloud architectures.</p>
              </div>
            </div>
          </div>

          {/* Quick Facts Card */}
          <div className="glass-card quick-facts-card">
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Quick Overview</h3>
            <div className="facts-list">
              {profile.quickFacts.map(fact => (
                <div key={fact.label} className="fact-item">
                  <span className="fact-label">{fact.label}</span>
                  <span className="fact-value">{fact.value}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.8rem' }}>Let&apos;s connect</h4>
              <div className="social-links-list">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-link-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-link-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
