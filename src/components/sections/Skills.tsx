'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

interface SkillBox {
  id: string;
  binNumber: number;
  title: string;
  top: string;
  left: string;
  width: string;
  height: string;
  description: string;
  tags: string[];
}

const SKILL_BOXES: SkillBox[] = [
  {
    id: 'code',
    binNumber: 1,
    title: 'Code & Programming',
    top: '11.5%',
    left: '11.8%',
    width: '27%',
    height: '20%',
    description: 'Foundational programming languages and algorithmic problem solving with strict typing and clean design patterns.',
    tags: ['TypeScript', 'JavaScript', 'Python', 'C++', 'SQL', 'HTML5 & CSS3']
  },
  {
    id: 'design',
    binNumber: 2,
    title: 'Product & UI/UX Designer',
    top: '11.5%',
    left: '39.8%',
    width: '27%',
    height: '20%',
    description: 'User-centric product design, high-fidelity Figma prototypes, scalable design systems, and intuitive micro-interactions.',
    tags: ['Figma', 'Design Systems', 'Wireframing', 'Prototyping', 'User Research', 'Information Architecture']
  },
  {
    id: 'ai',
    binNumber: 3,
    title: 'AI & Tools',
    top: '11.5%',
    left: '67.4%',
    width: '26%',
    height: '20%',
    description: 'Generative AI integrations, LLM orchestration with LangChain, prompt engineering, and modern developer productivity toolchains.',
    tags: ['LLMs & Prompt Engineering', 'LangChain', 'FastAPI', 'VS Code', 'Postman', 'Git & GitHub']
  },
  {
    id: 'dev',
    binNumber: 4,
    title: 'Development',
    top: '36.5%',
    left: '11.8%',
    width: '27%',
    height: '20%',
    description: 'Modern full-stack web engineering, reactive UI development, component architecture, state management, and RESTful APIs.',
    tags: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Redux Toolkit']
  },
  {
    id: 'cloud',
    binNumber: 5,
    title: 'Cloud & DevOps',
    top: '36.5%',
    left: '39.8%',
    width: '27%',
    height: '20%',
    description: 'Containerization, cloud infrastructure deployment, automated CI/CD pipelines, and distributed system monitoring.',
    tags: ['Docker', 'Kubernetes', 'CI/CD Pipelines', 'AWS', 'GitHub Actions', 'Vercel']
  },
  {
    id: 'pm',
    binNumber: 6,
    title: 'Project Mgmt & Systems',
    top: '36.5%',
    left: '67.4%',
    width: '26%',
    height: '20%',
    description: 'System architecture planning, high-performance database indexing, agile sprints, and cross-functional team delivery.',
    tags: ['Agile / Scrum', 'PostgreSQL', 'Redis', 'System Architecture', 'Prisma ORM', 'REST APIs']
  }
];

export const Skills: React.FC = () => {
  const [selectedBox, setSelectedBox] = useState<SkillBox | null>(null);
  const { playClick } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedBox(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleBoxClick = (box: SkillBox) => {
    playClick?.();
    setSelectedBox(prev => (prev?.id === box.id ? null : box));
  };

  const handleClose = () => {
    playClick?.();
    setSelectedBox(null);
  };

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

          <div className="skills-interactive-hint">
            <span className="skills-hint-icon">💡</span>
            <span>Click on any organizer box in the illustration to open its floating inventory window.</span>
          </div>
        </div>
      </div>

      {/* Div 2: For Img */}
      <div className="skills-img-column">
        <div className="skills-img-frame">
          <Image
            src="/images/skills-transparent.png"
            alt="Skills &amp; Technologies Organizer Workspace"
            width={1024}
            height={934}
            priority
            className="skills-main-img"
          />

          {/* Interactive Clickable Hotspots for the 6 boxes */}
          <div className="skills-hotspots-layer" aria-label="Interactive skill organizer boxes">
            {SKILL_BOXES.map((box) => {
              const isActive = selectedBox?.id === box.id;
              return (
                <button
                  key={box.id}
                  type="button"
                  className={`skill-box-hotspot ${isActive ? 'is-active' : ''}`}
                  style={{
                    top: box.top,
                    left: box.left,
                    width: box.width,
                    height: box.height,
                  }}
                  onClick={() => handleBoxClick(box)}
                  aria-label={`Open ${box.title} floating window`}
                  title={`Click to open ${box.title} floating window`}
                >
                  <span className="skill-hotspot-indicator">
                    <span className="skill-hotspot-pulse" />
                  </span>
                </button>
              );
            })}
          </div>

          {/* Small Floating Window (Contained Inside Section Only) */}
          {selectedBox && (
            <div
              className="skill-small-floating-window"
              role="region"
              aria-label={`${selectedBox.title} details`}
            >
              {/* Mini Titlebar */}
              <div className="skill-mini-titlebar">
                <div className="skill-mini-dots">
                  <span className="skill-mini-dot dot-red" />
                  <span className="skill-mini-dot dot-yellow" />
                  <span className="skill-mini-dot dot-green" />
                </div>
                <span className="skill-mini-title">
                  Bin #{selectedBox.binNumber} &bull; {selectedBox.title}
                </span>
                <button
                  type="button"
                  className="skill-mini-close-btn"
                  onClick={handleClose}
                  aria-label="Close floating window"
                  title="Close (Esc)"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Mini Body */}
              <div className="skill-mini-body">
                <div className="skill-mini-header-row">
                  <h3 className="skill-mini-heading">{selectedBox.title}</h3>
                </div>

                <p className="skill-mini-desc">
                  {selectedBox.description}
                </p>

                <div className="skill-mini-tags">
                  {selectedBox.tags.map((tag) => (
                    <span key={tag} className="skill-mini-tag">
                      <span className="skill-tag-dot" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
