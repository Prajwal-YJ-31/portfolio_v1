'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Project } from '@/types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop active"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: 18, height: 18 }}>
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div style={{ position: 'relative', width: '100%', height: 320 }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="modal-banner-img"
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="modal-content-inner">
          <div className="modal-header-meta">
            <span className="modal-category">
              {project.categoryName} • {project.badge}
            </span>
          </div>
          <h2 className="modal-title" id="modal-title">{project.title}</h2>
          <p className="modal-description">{project.fullDescription || project.description}</p>

          <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>Key Architecture Highlights</h4>
          <ul style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)' }}>
            {project.highlights.map((highlight, idx) => (
              <li key={idx} style={{ position: 'relative', paddingLeft: '1.2rem' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--color-primary)' }}>▹</span>
                {highlight}
              </li>
            ))}
          </ul>

          <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>Technologies Used</h4>
          <div className="modal-tags">
            {project.technologies.map(tech => (
              <span key={tech} className="tech-pill">{tech}</span>
            ))}
          </div>

          <div className="modal-actions">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Live Preview
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Source Code
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
