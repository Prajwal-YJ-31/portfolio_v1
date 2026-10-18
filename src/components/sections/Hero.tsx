'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolioData';
import { useTheme } from '@/context/ThemeContext';

export const Hero: React.FC = () => {
  const { profile } = portfolioData;
  const { playClick } = useTheme();

  // Dynamic Typing State
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Animated Stats
  const [counts, setCounts] = useState<number[]>(profile.stats.map(() => 0));
  const statsRef = useRef<HTMLDivElement>(null);
  const avatarCardRef = useRef<HTMLDivElement>(null);

  // Dynamic Typing Effect
  useEffect(() => {
    const roles = profile.typingRoles;
    const currentRole = roles[roleIndex];

    let timer: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentRole.length) {
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, 100);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      }, 50);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex(prev => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, profile.typingRoles]);

  // Animated Counters
  useEffect(() => {
    let animated = false;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !animated) {
        animated = true;
        profile.stats.forEach((stat, index) => {
          const duration = 1600;
          const steps = 60;
          const stepTime = duration / steps;
          const increment = stat.number / steps;
          let current = 0;

          const interval = setInterval(() => {
            current += increment;
            if (current >= stat.number) {
              setCounts(prev => {
                const updated = [...prev];
                updated[index] = stat.number;
                return updated;
              });
              clearInterval(interval);
            } else {
              setCounts(prev => {
                const updated = [...prev];
                updated[index] = Math.floor(current);
                return updated;
              });
            }
          }, stepTime);
        });
      }
    }, { threshold: 0.3 });

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [profile.stats]);

  // 3D Tilt Effect on Avatar Card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = avatarCardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = avatarCardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section className="hero" id="hero">
      <div className="container hero-grid">
        {/* Left Column: Intro & Headline */}
        <div className="hero-content">
          <div className="badge-status" id="hero-availability">
            <span className="pulse-dot"></span>
            {profile.availability}
          </div>

          <h1 className="hero-title" id="hero-headline">
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </h1>

          <div className="hero-dynamic-text" aria-live="polite">
            I am a <span className="typed-text">{typedText}</span><span className="type-cursor"></span>
          </div>

          <p className="hero-description">
            Passionate software engineer building resilient, scalable web applications, distributed backend microservices, and AI-driven interactive platforms with high aesthetic precision.
          </p>

          <div className="hero-cta-group">
            <a
              href="#projects"
              className="btn btn-primary"
              id="cta-projects-btn"
              onClick={() => playClick(550)}
            >
              Explore Projects
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
              id="cta-contact-btn"
              onClick={() => playClick(480)}
            >
              Get in Touch
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              title="GitHub Profile"
              aria-label="GitHub Profile"
              onClick={() => playClick(450)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>

          {/* Quick Stat Counters */}
          <div className="hero-stats" ref={statsRef}>
            {profile.stats.map((stat, idx) => (
              <div key={stat.label} className="stat-item">
                <span className="stat-number">
                  {counts[idx]}{stat.suffix}
                </span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 3D Tilt Avatar Showcase */}
        <div className="hero-visual-wrapper">
          <div className="avatar-card-container">
            <div
              className="avatar-frame"
              ref={avatarCardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              id="hero-avatar-card"
            >
              <Image
                src="/images/avatar.jpg"
                alt={`${profile.name} - Developer Portrait`}
                width={420}
                height={420}
                priority
                className="avatar-img"
              />
            </div>

            {/* Floating Badges */}
            <div className="floating-badge badge-top-left">
              <svg viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>Full-Stack</span>
            </div>

            <div className="floating-badge badge-middle-left">
              <svg viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
              <span>AI &amp; Cloud</span>
            </div>

            <div className="floating-badge badge-bottom-right">
              <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>High Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
