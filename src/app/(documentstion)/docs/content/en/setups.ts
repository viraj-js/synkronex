// Centralized content for all setup guides
export const setupsGuides = [
  {
    slug: 'shadcn-in-nextjs',
    title: '🎨 Setting up shadcn/ui in Next.js',
    steps: [
      {
        title: 'Install shadcn/ui CLI',
        code: 'npx shadcn-ui@latest init',
        details: [
          'Follow the prompts to choose your styling (e.g., Tailwind CSS).'
        ]
      },
      {
        title: 'Add a component',
        code: 'npx shadcn-ui@latest add button',
        details: []
      },
      {
        title: 'Customize components',
        code: null,
        details: [
          'Edit the generated components in your project as needed.'
        ]
      },
      {
        title: 'Read the docs',
        code: null,
        details: [
          'See ',
          {
            type: 'link',
            label: 'shadcn/ui installation docs',
            href: 'https://ui.shadcn.com/docs/installation'
          },
          ' for more details.'
        ]
      }
    ]
  }
  // Add more guides here as needed (TypeScript, Jest, etc)
];
