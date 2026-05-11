// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GLDF',
  tagline: 'Global Lighting Data Format',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://gldf.io',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'globallightingdata',
  projectName: 'website',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'warn',
    },
  },

  future: {
    v4: true,
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/globallightingdata/website/tree/master',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/globallightingdata/website/tree/master',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: [
            './src/css/custom.css',
            './src/css/index.css',
            './src/css/imprint.css',
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      algolia: {
        appId: 'CZKT0F0YIB',
        apiKey: '472ed677500d234a8afefdb39c5c54b7',
        indexName: 'gldf',
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: 'search',
      },
      navbar: {
        title: 'GLDF',
        logo: {
          alt: 'GLDF Logo',
          src: 'img/logo.png',
          srcDark: 'img/logo-dark.png',
        },
        items: [
          {
            to: 'blog/',
            label: 'Blog',
            position: 'left',
          },
          {
            to: 'getting-started/',
            label: 'Getting Started',
            position: 'left',
          },
          {
            to: 'docs/',
            activeBasePath: 'docs',
            label: 'Docs',
            position: 'left',
          },
          {
            href: '/xsd-reference/index_Root.html',
            label: 'XSD Reference',
            position: 'left',
            target: '_blank',
          },
          {
            to: 'gldf-editor/',
            label: 'GLDF Editor',
            position: 'left',
          },
          {
            to: 'l3d-editor/',
            label: 'L3D Editor',
            position: 'left',
          },
          {
            to: 'download',
            label: 'Download',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/globallightingdata/gldf/releases',
            label: 'Releases',
            position: 'right',
          },
          {
            href: 'https://github.com/globallightingdata/gldf',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'DIAL GmbH',
            items: [
              {
                label: 'Website',
                href: 'https://www.dial.de',
              },
              {
                label: 'DIALux',
                href: 'https://www.dialux.com',
              },
              {
                label: 'DIALux Luminaire Finder',
                href: 'https://luminaires.dialux.com',
              },
            ],
          },
          {
            title: 'RELUX Informatik AG',
            items: [
              {
                label: 'Website',
                href: 'https://relux.com',
              },
              {
                label: 'ReluxDesktop',
                href: 'https://relux.com/en/relux-desktop.html',
              },
              {
                label: 'ReluxNet',
                href: 'https://relux.com/en/search/luminaires/',
              },
            ],
          },
          {
            title: 'Imprint',
            items: [
              {
                label: 'Legal notice',
                to: 'imprint',
              },
              {
                label: 'Data Protection Policy',
                to: 'privacy-policy',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} DIAL GmbH & RELUX Informatik AG. All rights reserved.<br />Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ['csharp'],
        theme: prismThemes.palenight,
        darkTheme: prismThemes.palenight,
      },
    }),
};

export default config;