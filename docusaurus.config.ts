import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Computer Monitor Guide',
  tagline: 'Understand technology, make informed choices',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://www.computer-monitor-guide.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // Custom head tags for better SEO
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'computer monitor, display guide, monitor buying guide, screen technology, gaming monitor, office monitor, 4K monitor, refresh rate, resolution',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: 'Computer Monitor Guide',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:type',
        content: 'website',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:site_name',
        content: 'Computer Monitor Guide',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'canonical',
        href: 'https://www.computer-monitor-guide.com',
      },
    },
    // Schema.org structured data
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Computer Monitor Guide",
        "description": "Comprehensive guide to understanding computer monitor technology and making informed purchasing decisions",
        "url": "https://www.computer-monitor-guide.com",
        "publisher": {
          "@type": "Organization",
          "name": "Computer Monitor Guide"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.computer-monitor-guide.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }),
    },
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'computer-monitor-guide', // Usually your GitHub org/user name.
  projectName: 'computer-monitor-guide', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Enable compression and caching
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/computer-monitor-guide/computer-monitor-guide/tree/main/',
          // Performance optimizations
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Custom social card for better sharing
    image: 'img/computer-monitor-guide-social-card.jpg',
    metadata: [
      {name: 'keywords', content: 'computer monitor, display guide, monitor buying guide, screen technology'},
      {name: 'twitter:creator', content: '@ComputerMonitorGuide'},
      {property: 'og:image:alt', content: 'Computer Monitor Guide - Understand technology, make informed choices'},
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
