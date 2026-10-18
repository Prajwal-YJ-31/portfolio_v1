import { Profile, SkillCategory, Project, TimelineItem } from '@/types/portfolio';

export const portfolioData: {
  profile: Profile;
  skills: SkillCategory[];
  projects: Project[];
  experience: TimelineItem[];
  education: TimelineItem[];
} = {
  profile: {
    name: 'Prajwal Y J',
    title: 'Software Engineer & Full-Stack Developer',
    availability: 'Available for new opportunities',
    location: 'Bengaluru, India',
    email: 'prajwalyj.dev@gmail.com',
    github: 'https://github.com/Prajwal-YJ-31',
    linkedin: 'https://linkedin.com/in/prajwal-yj',
    twitter: 'https://twitter.com',
    bioLead: 'Building scalable, high-performance web systems and AI-powered interfaces with pixel-perfect design.',
    bioDescription: 'I am a dedicated software engineer driven by an obsession for clean code, intuitive user experiences, and robust architectures. With expertise across modern frontend frameworks, cloud backend microservices, and distributed systems, I transform complex ideas into reliable digital products.',
    typingRoles: [
      'Full-Stack Software Engineer',
      'AI & Cloud Systems Builder',
      'Modern Web Architect',
      'Creative Problem Solver'
    ],
    stats: [
      { number: 18, suffix: '+', label: 'Completed Projects' },
      { number: 3, suffix: '+', label: 'Years Coding' },
      { number: 250, suffix: '+', label: 'GitHub Commits' },
      { number: 100, suffix: '%', label: 'Client Satisfaction' }
    ],
    quickFacts: [
      { label: 'Based in', value: 'Bengaluru, India 🇮🇳' },
      { label: 'Education', value: 'B.E. Computer Science & Engineering' },
      { label: 'Specialization', value: 'Full Stack & Distributed Systems' },
      { label: 'Languages', value: 'English, Kannada, Hindi' },
      { label: 'Interests', value: 'System Design, AI Agents, Open Source' }
    ]
  },

  skills: [
    {
      category: 'Frontend Development',
      icon: 'code',
      tags: [
        'React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)',
        'HTML5 / CSS3', 'Tailwind CSS', 'Redux Toolkit', 'Vue.js', 'Responsive Design'
      ]
    },
    {
      category: 'Backend & Systems',
      icon: 'server',
      tags: [
        'Node.js', 'Express.js', 'Python', 'FastAPI', 'Django',
        'RESTful APIs', 'GraphQL', 'Microservices', 'WebSocket'
      ]
    },
    {
      category: 'Databases & Storage',
      icon: 'database',
      tags: [
        'PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Prisma ORM', 'Supabase', 'Firebase'
      ]
    },
    {
      category: 'DevOps & Cloud',
      icon: 'cloud',
      tags: [
        'Docker', 'AWS (EC2, S3, Lambda)', 'Git & GitHub Actions', 'CI/CD Pipelines',
        'Linux CLI', 'Nginx', 'Vercel / Netlify'
      ]
    }
  ],

  projects: [
    {
      id: 'ai-analytics',
      title: 'Synthesis AI - Generative Analytics Platform',
      category: 'ai',
      categoryName: 'AI / ML',
      badge: 'Featured',
      image: '/images/projects/ai-platform.jpg',
      description: 'An intelligent telemetry & LLM evaluation engine providing real-time neural network graph visualizations, sentiment analysis, and model benchmarks.',
      fullDescription: 'Synthesis AI is a modern observability suite for Large Language Model deployments. It allows machine learning teams to track latency, token throughput, hallucination rates, and semantic drift across thousands of live user interactions in real time.',
      highlights: [
        'Interactive canvas graph visualization of neural layer weights and routing',
        'Sub-millisecond token streaming metrics and anomaly detection',
        'Integrated playground for comparative prompt engineering across models'
      ],
      technologies: ['Next.js', 'TypeScript', 'Python', 'FastAPI', 'Tailwind CSS', 'Redis', 'Chart.js'],
      liveUrl: 'https://github.com/Prajwal-YJ-31',
      githubUrl: 'https://github.com/Prajwal-YJ-31'
    },
    {
      id: 'cloud-devops',
      title: 'Nebula Mesh - Kubernetes & Cloud Observability',
      category: 'fullstack',
      categoryName: 'Full Stack',
      badge: 'Production',
      image: '/images/projects/cloud-devops.jpg',
      description: 'Distributed microservices monitoring dashboard displaying interactive Kubernetes cluster topologies, latency gauges, and automated health diagnostics.',
      fullDescription: 'Nebula Mesh delivers full-stack observability for containerized environments. It maps cluster dependencies dynamically, detects cascading microservice bottlenecks, and surfaces actionable telemetry alerts before outages happen.',
      highlights: [
        'Real-time interactive node and pod topology with health status beacons',
        'Live network latency breakdown and automated error budget tracking',
        'Role-based access control and encrypted webhook alert integrations'
      ],
      technologies: ['React', 'Node.js', 'Docker', 'Kubernetes', 'PostgreSQL', 'WebSockets', 'Go'],
      liveUrl: 'https://github.com/Prajwal-YJ-31',
      githubUrl: 'https://github.com/Prajwal-YJ-31'
    },
    {
      id: 'fintech-platform',
      title: 'Finalytics - FinTech & Crypto Portfolio Engine',
      category: 'web',
      categoryName: 'Web Apps',
      badge: 'FinTech',
      image: '/images/projects/fintech-web.jpg',
      description: 'Real-time algorithmic trading and crypto asset portfolio tracker with automated revenue reconciliation, profit calculators, and live ticker feeds.',
      fullDescription: 'Finalytics is an enterprise-grade financial management platform tailored for digital asset traders. Featuring interactive charts with multi-timeframe analysis, multi-currency support, and instant transaction audits.',
      highlights: [
        'High-frequency live WebSocket feeds for cryptocurrency pairs',
        'Interactive revenue forecasting charts with customizable trend lines',
        'Bank-grade security simulation with audited transaction flows'
      ],
      technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'CoinGecko API'],
      liveUrl: 'https://github.com/Prajwal-YJ-31',
      githubUrl: 'https://github.com/Prajwal-YJ-31'
    },
    {
      id: 'devtool-ide',
      title: 'Nimbus Studio - Cloud Developer Workstation',
      category: 'opensource',
      categoryName: 'Open Source',
      badge: 'DevTools',
      image: '/images/projects/devtool-ide.jpg',
      description: 'Browser-based developer environment and code sandboxing engine with multi-file compilation, live AST parsing, and terminal emulation.',
      fullDescription: 'Nimbus Studio empowers developers to prototype, execute, and collaborate on code directly in the browser. Powered by WebAssembly and containerized runtimes, it eliminates local environment configuration hassles.',
      highlights: [
        'Monaco Editor integration with language server protocol (LSP) support',
        'Virtual terminal emulator with real-time process monitoring',
        'One-click workspace sharing and persistent cloud snapshots'
      ],
      technologies: ['TypeScript', 'React', 'WebAssembly', 'Docker', 'Node.js', 'Socket.io'],
      liveUrl: 'https://github.com/Prajwal-YJ-31',
      githubUrl: 'https://github.com/Prajwal-YJ-31'
    }
  ],

  experience: [
    {
      role: 'Software Development Engineer',
      company: 'Tech Innovations Lab',
      period: '2024 - Present',
      bullets: [
        'Architected and deployed responsive full-stack applications serving over 50,000 monthly active users.',
        'Implemented microservices and RESTful API endpoints, reducing average response latency by 35%.',
        'Spearheaded the migration of legacy frontend modules to modern TypeScript and React components.'
      ]
    },
    {
      role: 'Full-Stack Developer Intern',
      company: 'Digital Solutions Corp',
      period: '2023 - 2024',
      bullets: [
        'Collaborated with cross-functional teams to deliver client-facing dashboards and web portals.',
        'Optimized database queries and implemented caching layers using Redis, boosting query speed by 40%.',
        'Automated continuous integration and deployment pipelines using GitHub Actions.'
      ]
    }
  ],

  education: [
    {
      role: 'Bachelor of Engineering (B.E.)',
      company: 'Computer Science & Engineering',
      period: '2020 - 2024',
      bullets: [
        'Graduated with First Class Distinction in Computer Science and Engineering.',
        'Core Coursework: Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks.',
        'Collegiate hackathon finalist with autonomous developer tooling prototypes.'
      ]
    }
  ]
};
