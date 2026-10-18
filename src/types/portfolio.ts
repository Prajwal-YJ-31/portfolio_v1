export interface Profile {
  name: string;
  title: string;
  availability: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  bioLead: string;
  bioDescription: string;
  typingRoles: string[];
  stats: StatItem[];
  quickFacts: QuickFact[];
}

export interface StatItem {
  number: number;
  suffix: string;
  label: string;
}

export interface QuickFact {
  label: string;
  value: string;
}

export interface SkillCategory {
  category: string;
  icon: 'code' | 'server' | 'database' | 'cloud';
  tags: string[];
}

export type ProjectCategory = 'all' | 'ai' | 'fullstack' | 'web' | 'opensource';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryName: string;
  badge: string;
  image: string;
  description: string;
  fullDescription: string;
  highlights: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface TimelineItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}
