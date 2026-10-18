'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolioData';
import { Project, ProjectCategory } from '@/types/portfolio';
import { ProjectModal } from '@/components/ui/ProjectModal';
import { useTheme } from '@/context/ThemeContext';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { playClick } = useTheme();

  const filterTabs: { key: ProjectCategory; label: string }[] = [
    { key: 'all', label: 'All Projects' },
    { key: 'ai', label: 'AI & ML' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'web', label: 'Web Apps' },
    { key: 'opensource', label: 'Open Source' },
  ];

  const filteredProjects = filter === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === filter);

  const handleFilterClick = (cat: ProjectCategory) => {
    playClick(500);
    setFilter(cat);
  };

  const handleOpenDetails = (project: Project) => {
    playClick(580);
    setSelectedProject(project);
  };

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 14, height: 14 }}>
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            Showcase
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            A curated collection of scalable software architectures, AI platforms, and developer tooling.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs" role="tablist">
          {filterTabs.map(tab => (
            <button
              key={tab.key}
              className={`filter-btn ${filter === tab.key ? 'active' : ''}`}
              onClick={() => handleFilterClick(tab.key)}
              role="tab"
              aria-selected={filter === tab.key}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid" id="projects-grid">
          {filteredProjects.map(project => (
            <article key={project.id} className="project-card">
              <div
                className="project-img-wrapper"
                onClick={() => handleOpenDetails(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') handleOpenDetails(project); }}
                aria-label={`View ${project.title} details`}
              >
                <span className="project-badge-tag">{project.badge || project.categoryName}</span>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={340}
                  className="project-img"
                />
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tech-stack">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <button
                    className="btn btn-sm btn-outline"
                    onClick={() => handleOpenDetails(project)}
                  >
                    View Details
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>

                  <div className="project-links-group">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn"
                      aria-label="GitHub Repository"
                      title="GitHub Source"
                      onClick={() => playClick(460)}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn"
                      aria-label="Live Demo"
                      title="Live Preview"
                      onClick={() => playClick(460)}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
