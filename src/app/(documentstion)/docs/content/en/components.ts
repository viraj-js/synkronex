const componentsContent = {
  hero: {
    badge: 'UI Components',
    title: 'Synkronex UI Components',
    description:
      'Explore the reusable UI components that power Synkronex. Each component is customizable, accessible, and built for modern web apps.',
  },
  components: [
    {
      icon: 'Menu',
      name: 'Button',
      usage: '<Button variant="primary">Click me</Button>',
      description: 'Accessible, theme-aware buttons for actions and navigation.',
    },
    {
      icon: 'Input',
      name: 'Input',
      usage: '<Input variant="text" placeholder="Enter text" />',
      description: 'Text field with support for different types, icons, and error states.',
    },
    {
      icon: 'Square',
      name: 'Card',
      usage: '<Card>Card Content</Card>',
      description: 'Flexible container for grouping related content or actions.',
    },
    {
      icon: 'Modal',
      name: 'Modal',
      usage: '<Modal open={true} onClose={closeHandler}>Modal Content</Modal>',
      description: 'Dialog overlay for user interactions and notifications.',
    },
    {
      icon: 'AlertCircle',
      name: 'Alert',
      usage: '<Alert type="success">Success message</Alert>',
      description: 'Banner for success, error, warning, or info messages.',
    },
    {
      icon: 'User',
      name: 'Avatar',
      usage: '<Avatar src="/user.jpg" initials="AB" />',
      description: 'User profile image, initials, or badge.',
    },
    {
      icon: 'ChevronDown',
      name: 'Dropdown',
      usage: '<Dropdown options={options} value={value} onChange={setValue} />',
      description: 'Single or multi-select dropdown menu.',
    },
    {
      icon: 'Layers',
      name: 'Tabs',
      usage: '<Tabs tabs={tabs} activeTab={0} onTabChange={fn} />',
      description: 'Tabbed navigation for switching between content sections.',
    },
    {
      icon: 'Loader',
      name: 'Loader',
      usage: '<Loader size="medium" />',
      description: 'Spinner for loading states.',
    },
    {
      icon: 'Type',
      name: 'Typography',
      usage: '<Typography as="h1" variant="h1">Heading</Typography>',
      description: 'Consistent text styles for headings, body, and captions.',
    },
    {
      icon: 'BadgeCheck',
      name: 'Badge',
      usage: '<Badge label="Active" status="success" />',
      description: 'Status or label indicator for highlighting important info.',
    },
    {
      icon: 'Code',
      name: 'CodeBlock',
      usage: '<CodeBlock code={exampleCode} />',
      description: 'Editor-like code display with copy-to-clipboard and responsive design.',
    },
    {
      icon: 'Link',
      name: 'Breadcrumbs',
      usage: "<Breadcrumbs items={[{label: 'Home', href: '/'}, {label: 'Page'}]} />",
      description: "Navigation aid showing the current page's location in a hierarchy.",
    },
    {
      icon: 'Minus',
      name: 'Divider',
      usage: '<Divider />',
      description: 'Horizontal or vertical separator for grouping content.',
    },
    {
      icon: 'LayoutDashboard',
      name: 'Navbar',
      usage: '<Navbar />',
      description: 'Responsive navigation bar for seamless site navigation.',
    },
  ],
};

export default componentsContent;
