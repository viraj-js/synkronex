const homeContent = {
  hero: {
    title: 'Welcome to Synkronex',
    subtitle: 'The modern open-source project management system.',
    badge: 'Open Source',
    description:
      'Synkronex is your all-in-one solution for project management, collaboration, and productivity.',
    buttons: {
      getStarted: 'Get Started',
      github: 'GitHub',
      demo: 'Live Demo',
    },
    stats: {
      contributors: '50+ Contributors',
      stars: '2,000+ Stars',
      issues: '100+ Issues Resolved',
    },
  },
  quickStart: {
    title: 'Quick Start',
    subtitle: 'Set up your project in minutes with these simple steps.',
    steps: [
      {
        title: 'Clone the Repository',
        description: 'Get the latest code from GitHub',
        code: `git clone https://github.com/your-org/synkronex.git`,
      },
      {
        title: 'Install Dependencies',
        description: 'Install all required packages',
        code: `npm install`,
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
  },
};

export default homeContent;
