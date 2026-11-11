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
      timer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex(prev => (prev + 1) % roles.length);
      }, 300);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, profile.typingRoles]);

  // 3D Tilt & Specular Physics on Hanging ID Card
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isInteracting, setIsInteracting] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return;
    const card = avatarCardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -11;
    const rotateY = ((x - centerX) / centerX) * 13;
    const rotateZ = ((x - centerX) / centerX) * 2.5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale3d(1.02, 1.02, 1.02)`;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlarePos({ x: glareX, y: glareY, opacity: 1 });
  };

  const handleMouseEnter = () => {
    setIsInteracting(true);
  };

  const handleMouseLeave = () => {
    setIsInteracting(false);
    const card = avatarCardRef.current;
    if (!card) return;
    card.style.transform = '';
    setGlarePos(prev => ({ ...prev, opacity: 0 }));
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
            Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
          </h1>

          <div className="hero-dynamic-text" aria-live="polite">
            I am a <span className="typed-text">{typedText}</span><span className="type-cursor"></span>
          </div>

          <p className="hero-description">
            Passionate product designer and developer crafting intuitive user experiences, scalable web applications, and interactive platforms with high aesthetic precision.
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
        </div>

        {/* Right Column: 3D Hanging ID Card Showcase */}
        <div className="hero-visual-wrapper">
          <div className="hanging-id-container">
            {/* Lanyard Strap & Metallic Hardware */}
            <div className="lanyard-rig" aria-hidden="true">
              <div className="lanyard-strap">
                <span className="lanyard-strap-text">PRAJWAL • PASS</span>
              </div>
              <div className="lanyard-hardware">
                <div className="lanyard-crimp"></div>
                <div className="lanyard-ring"></div>
                <div className="lanyard-clip">
                  <div className="lanyard-clip-body"></div>
                  <div className="lanyard-clip-hook"></div>
                </div>
              </div>
            </div>

            {/* The Hanging ID Card */}
            <div
              className={`id-card-wrapper ${isInteracting ? 'is-interacting' : 'is-swaying'}`}
              ref={avatarCardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              id="hero-id-card"
            >
              {/* Acrylic Holder Tab with Punch Slot */}
              <div className="id-card-holder-tab">
                <div className="id-card-slot">
                  <div className="id-card-slot-inner"></div>
                </div>
              </div>

              {/* Main Badge Surface: Minimalist (Image, Name, Designation) */}
              <div className="id-card-body">
                {/* Dynamic Specular Acrylic Glare Overlay */}
                <div
                  className="id-card-glare"
                  style={{
                    background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.06) 45%, transparent 70%)`,
                    opacity: glarePos.opacity,
                  }}
                  aria-hidden="true"
                />

                {/* Photo Frame */}
                <div className="id-photo-frame">
                  <Image
                    src="/images/avatar.jpg"
                    alt={`${profile.name} - Product Designer & Developer Portrait`}
                    width={440}
                    height={440}
                    priority
                    className="id-avatar-img"
                  />
                </div>

                {/* Member Details: Name & Designation */}
                <div className="id-details">
                  <h2 className="id-name">{profile.name}</h2>
                  <p className="id-role">{profile.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
