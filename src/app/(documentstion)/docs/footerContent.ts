export const footerContent = {
  copyright: (year: number) => `© ${year} Synkronex.`,
  allRightsReserved: 'All rights reserved.',
  madeWith: 'Made with',
  by: 'by',
  links: [
    {
      label: 'GitHub',
      href: 'https://github.com/viraj-js/synkronex',
      external: true,
      ariaLabel: 'GitHub',
      icon: 'github',
    },
    {
      label: 'Contact',
      href: 'mailto:contact@synkronex.com',
      external: false,
      ariaLabel: 'Contact',
      icon: 'mail',
    },
    {
      label: 'Docs',
      href: '/docs',
      external: false,
      ariaLabel: 'Docs',
      icon: null,
    },
  ],
  brand: 'Synkronex',
};
