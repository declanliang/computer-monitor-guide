import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Computer Monitor Guide',
  tagline: 'Understand technology, make informed choices',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://www.computer-monitor-guide.com',
  baseUrl: '/',

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: 'Computer Monitor Guide',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Computer Monitor Guide',
        description:
          'Comprehensive guide to understanding computer monitor technology and making informed purchasing decisions',
        url: 'https://www.computer-monitor-guide.com',
        publisher: {
          '@type': 'Organization',
          name: 'Computer Monitor Guide',
        },
      }),
    },
  ],

  organizationName: 'computer-monitor-guide',
  projectName: 'computer-monitor-guide',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  staticDirectories: ['static'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        htmlLang: 'en',
      },
    },
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'recommendations',
        path: 'recommendations',
        routeBasePath: 'recommendations',
        sidebarPath: './sidebarsRecommendations.ts',
        editUrl:
          'https://github.com/computer-monitor-guide/computer-monitor-guide/tree/main/',
        showLastUpdateTime: true,
        showLastUpdateAuthor: false,
      },
    ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-K3VJ3GJ888',
        anonymizeIP: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/computer-monitor-guide/computer-monitor-guide/tree/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Reviews & Updates',
          blogDescription: 'Monitor reviews, comparisons, and buying news',
          routeBasePath: 'blog',
          postsPerPage: 10,
          editUrl:
            'https://github.com/computer-monitor-guide/computer-monitor-guide/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/computer-monitor-guide-social-card.jpg',
    metadata: [
      {
        name: 'keywords',
        content:
          'computer monitor, display guide, monitor buying guide, screen technology, gaming monitor, office monitor, 4K monitor, refresh rate, resolution',
      },
      {name: 'twitter:creator', content: '@ComputerMonitorGuide'},
      {
        property: 'og:image:alt',
        content:
          'Computer Monitor Guide - Understand technology, make informed choices',
      },
      {property: 'og:locale', content: 'en_US'},
    ],
    navbar: {
      title: 'Computer Monitor Guide',
      logo: {
        alt: 'Computer Monitor Guide Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Guide',
        },
        {
          to: '/recommendations',
          label: 'Our Picks',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Reviews',
          position: 'left',
        },
        {
          href: 'https://github.com/computer-monitor-guide/computer-monitor-guide',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Quick Start',
          items: [
            {
              label: 'Choose by Use Case',
              to: '/docs/quick-guide/by-use-case',
            },
            {
              label: 'Our Picks',
              to: '/recommendations',
            },
          ],
        },
        {
          title: 'Core Knowledge',
          items: [
            {
              label: 'Fundamentals',
              to: '/docs/fundamentals/size-and-resolution',
            },
            {
              label: 'Advanced',
              to: '/docs/advanced/sync-technologies',
            },
            {
              label: 'Comparisons & Reviews',
              to: '/blog',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'About This Site',
              to: '/docs/about/why-this-site',
            },
            {
              label: 'Affiliate Disclosure',
              to: '/recommendations',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/computer-monitor-guide/computer-monitor-guide',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Computer Monitor Guide. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
