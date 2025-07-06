const documentationNavigation = [
    {
        name: 'Introduction',
        href: '/docs/introduction',
    },
    {
        name: 'Getting Started',
        href: '/docs/getting-started',
    },
    {
        name: 'Components',
        href: '/docs/components',
    },
    {
        name: 'API Reference',
        href: '/docs/api-reference',
    },
    {
        name: 'Setups',
        href: '/docs/setups',
        children: [
            {
                name: 'TypeScript in Next.js',
                href: '/docs/setups/ts-in-nextjs',
            },
            {
                name: 'Jest in Next.js',
                href: '/docs/setups/jest-in-nextjs',
            },
            {
                name: 'shadcn/ui in Next.js',
                href: '/docs/setups/shadcn-in-nextjs',
            },
        ],
    },
];
export { documentationNavigation };