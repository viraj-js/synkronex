import { Code, Users, CheckCircle, Rocket, GitBranch, Coffee, Zap, Shield, Database, Palette, MessageCircle, FileText, Settings, Bug, Lightbulb } from 'lucide-react';

export const content = {
  hero: {
    badge: 'Open Source Project',
    title: 'Synkronex',
    subtitle: 'Collaborative Task Management',
    description: 'An open-source, modern task management application built with Next.js, TypeScript, and cutting-edge web technologies. Join our community of developers building the future of productivity tools.',
    buttons: {
      getStarted: 'Start Contributing',
      github: 'View Repository',
      demo: 'Live Demo',
    },
    stats: {
      contributors: '24 contributors',
      stars: '1.2K stars',
      issues: '12 open issues',
    },
  },
  quickStart: {
    title: 'Quick Start for Developers',
    subtitle: 'Get the project running locally in under 3 minutes',
    steps: [
      {
        title: 'Clone & Setup',
        description: 'Fork the repository and set up your development environment',
        code: `git clone https://github.com/your-org/taskflow.git\ncd taskflow\nnpm install`,
      },
      {
        title: 'Environment Setup',
        description: 'Configure your local environment variables',
        code: `cp .env.example .env.local\n# Edit .env.local with your database URL\nnpm run db:migrate`,
      },
      {
        title: 'Start Development',
        description: 'Run the development server and start coding',
        code: `npm run dev\n# Visit http://localhost:3000`,
      },
    ],
  },
  techStack: {
    title: 'Modern Tech Stack',
    subtitle: 'Built with industry-leading technologies and best practices',
    technologies: [
      {
        name: 'Next.js 15',
        description: 'React framework with App Router and Server Components',
        category: 'Frontend',
        color: 'blue',
      },
      {
        name: 'TypeScript',
        description: 'Type-safe JavaScript for better developer experience',
        category: 'Language',
        color: 'indigo',
      },
      {
        name: 'Drizzle',
        description: 'Next-generation ORM for database management',
        category: 'Database',
        color: 'green',
      },
      {
        name: 'Tailwind CSS',
        description: 'Utility-first CSS framework for rapid styling',
        category: 'Styling',
        color: 'cyan',
      },
      {
        name: 'NextAuth.js',
        description: 'Complete authentication solution for Next.js',
        category: 'Auth',
        color: 'purple',
      },
      {
        name: 'shadcn/ui',
        description: 'Beautiful, accessible UI components',
        category: 'UI',
        color: 'orange',
      },
    ],
  },
  features: {
    title: 'Project Features',
    subtitle: 'What makes Synkronex special for both users and developers',
    items: [
      {
        title: 'Real-time Collaboration',
        description: 'Live updates, comments, and team synchronization using WebSockets',
        icon: Users,
        color: 'blue',
      },
      {
        title: 'Advanced Task Management',
        description: 'Kanban boards, priorities, labels, due dates, and custom workflows',
        icon: CheckCircle,
        color: 'green',
      },
      {
        title: 'Developer-First Architecture',
        description: 'Clean code, comprehensive tests, and excellent documentation',
        icon: Code,
        color: 'purple',
      },
      {
        title: 'Extensible Plugin System',
        description: 'Build and integrate custom features with our plugin architecture',
        icon: Settings,
        color: 'orange',
      },
      {
        title: 'Performance Optimized',
        description: 'Server-side rendering, caching, and optimized database queries',
        icon: Zap,
        color: 'yellow',
      },
      {
        title: 'Security First',
        description: 'Authentication, authorization, and data protection best practices',
        icon: Shield,
        color: 'red',
      },
    ],
  },
  contribute: {
    title: 'Ways to Contribute',
    subtitle: 'Multiple ways to get involved and make an impact',
    ways: [
      {
        title: 'Code Contributions',
        description: 'Fix bugs, add features, or improve performance',
        icon: Code,
        color: 'blue',
        actions: ['Browse Issues', 'Submit PR'],
      },
      {
        title: 'Documentation',
        description: 'Help improve our guides, API docs, and tutorials',
        icon: FileText,
        color: 'green',
        actions: ['Edit Docs', 'Write Guides'],
      },
      {
        title: 'Bug Reports',
        description: 'Report issues and help us improve stability',
        icon: Bug,
        color: 'red',
        actions: ['Report Bug', 'Test Features'],
      },
      {
        title: 'Feature Requests',
        description: 'Suggest new features and improvements',
        icon: Lightbulb,
        color: 'yellow',
        actions: ['Suggest Feature', 'Join Discussion'],
      },
    ],
  },
  resources: {
    title: 'Developer Resources',
    subtitle: 'Everything you need to start contributing',
    items: [
      {
        title: 'Getting Started',
        description: 'Setup guide, project structure, and development workflow',
        href: '/docs/getting-started',
        icon: Rocket,
      },
      {
        title: 'Architecture Guide',
        description: 'Understanding the codebase, patterns, and conventions',
        href: '/docs/architecture',
        icon: Code,
      },
      {
        title: 'API Documentation',
        description: 'Complete API reference with examples and schemas',
        href: '/docs/api',
        icon: Database,
      },
      {
        title: 'Contributing Guide',
        description: 'Guidelines for contributing code, reporting issues, and more',
        href: '/docs/contributing',
        icon: GitBranch,
      },
      {
        title: 'Component Library',
        description: 'UI components, design system, and styling guidelines',
        href: '/docs/components',
        icon: Palette,
      },
      {
        title: 'Deployment Guide',
        description: 'Deploy to production environments and manage releases',
        href: '/docs/deployment',
        icon: Rocket,
      },
    ],
  },
  community: {
    title: 'Join Our Community',
    subtitle: 'Connect with other developers, get help, and stay updated',
    platforms: [
      {
        name: 'GitHub Discussions',
        description: 'Ask questions, share ideas, and get help from the community',
        icon: MessageCircle,
        color: 'gray',
        href: 'https://github.com/your-org/taskflow/discussions',
      },
      {
        name: 'Discord Server',
        description: 'Real-time chat with contributors and maintainers',
        icon: Users,
        color: 'indigo',
        href: 'https://discord.gg/taskflow',
      },
      {
        name: 'Twitter',
        description: 'Follow updates, announcements, and project news',
        icon: Coffee,
        color: 'blue',
        href: 'https://twitter.com/taskflow_dev',
      },
    ],
  },
};
