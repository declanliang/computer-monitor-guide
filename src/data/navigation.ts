export type NavItem = {
  label: string;
  href: string;
};

export type NavGroup = {
  label: string;
  items: NavItem[];
};

export const guideNav: NavGroup[] = [
  {
    label: 'Quick Start',
    items: [
      {label: 'Choose by Use Case', href: '/docs/quick-guide/by-use-case'},
      {label: 'Selection Guide', href: '/docs/intro'},
    ],
  },
  {
    label: 'Fundamentals',
    items: [
      {label: 'Size and Resolution', href: '/docs/fundamentals/size-and-resolution'},
      {label: 'Refresh Rate', href: '/docs/fundamentals/refresh-rate'},
      {label: 'Response Time', href: '/docs/fundamentals/response-time'},
      {label: 'Color Gamut', href: '/docs/fundamentals/color-gamut'},
      {label: 'Panel Types', href: '/docs/fundamentals/panel-types'},
      {label: 'Interface Types', href: '/docs/fundamentals/interfaces'},
      {label: 'Brightness and Contrast', href: '/docs/fundamentals/brightness-contrast'},
    ],
  },
  {
    label: 'Advanced',
    items: [
      {label: 'Sync Technologies', href: '/docs/advanced/sync-technologies'},
      {label: 'HDR Technology', href: '/docs/advanced/hdr'},
      {label: 'Color Accuracy', href: '/docs/advanced/color-accuracy'},
      {label: 'Ergonomics', href: '/docs/advanced/ergonomics'},
    ],
  },
  {
    label: 'About',
    items: [{label: 'Why This Site Was Created', href: '/docs/about/why-this-site'}],
  },
];
