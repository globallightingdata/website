// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/palenight");
const darkCodeTheme = require("prism-react-renderer/themes/palenight");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "GLDF",
  tagline: "Global Lighting Data Format",
  url: "https://gldf.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "globallightingdata",
  projectName: "website",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/globallightingdata/website/tree/master",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/globallightingdata/website/tree/master",
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/index.css"),
            require.resolve("./src/css/imprint.css"),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // announcementBar: {
      //   id: 'licht2021',
      //   content: 'Meet us online @<a target="_blank" rel="noopener noreferrer" href="/blog/2021/03/22/licht-2021">LICHT2021</a>',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: true,
      // },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      algolia: {
        appId: "CZKT0F0YIB",
        apiKey: "472ed677500d234a8afefdb39c5c54b7",
        indexName: "gldf",
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: "search",
        // Optional: Replace parts of the item URLs from Algolia.
        // Useful when using the same search index for multiple deployments using a different baseUrl.
        // You can use regexp or string in the `from` param.
        // For example: localhost: 3000 vs myCompany.com / docs
        // replaceSearchResultPathname: {
        //   from: "/docs/", // or as RegExp: /\/docs\//
        //   to: "/",
        // },
      },
      navbar: {
        title: "GLDF",
        logo: {
          alt: "GLDF Logo",
          src: "img/logo.png",
          srcDark: "img/logo-dark.png",
        },
        items: [
          {
            to: "blog/",
            label: "Blog",
            position: "left",
          },
          {
            to: "getting-started/",
            label: "Getting Started",
            position: "left",
          },
          {
            to: "docs/",
            activeBasePath: "docs",
            label: "Docs",
            position: "left",
          },
          {
            href: "/xsd-reference/index_Root.html",
            label: "XSD Reference",
            position: "left",
            target: "_blank",
          },
          {
            to: "tools/",
            label: "Tools",
            position: "left",
          },
          /* Lokalisierung */
          // {
          //   type: "localeDropdown",
          //   position: "right",
          //   dropdownItemsBefore: [],
          //   dropdownItemsAfter: [
          //     {
          //       to: "https://gldf.io/help-us-translate",
          //       label: "Help us translate",
          //     },
          //   ],
          // },

          /* Versionierung */
          // {
          //   type: "docsVersionDropdown",
          //   position: "right",
          //   dropdownActiveClassDisabled: true,
          //   dropdownItemsBefore: [],
          //   dropdownItemsAfter: [
          //     {
          //       to: "/versions",
          //       label: "All versions",
          //     },
          //   ],
          // },
          {
            to: "download",
            label: "Download",
            position: "right",
          },
          {
            type: "search",
            position: "right",
          },
          {
            href: "https://github.com/globallightingdata/gldf/releases",
            label: "Releases",
            position: "right",
          },
          {
            href: "https://github.com/globallightingdata/gldf",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "DIAL GmbH",
            items: [
              {
                label: "Website",
                href: "https://www.dial.de",
              },
              {
                label: "DIALux",
                href: "https://www.dialux.com",
              },
              {
                label: "LUMsearch",
                href: "https://lumsearch.com",
              },
            ],
          },
          {
            title: "RELUX Informatik AG",
            items: [
              {
                label: "Website",
                href: "https://relux.com",
              },
              {
                label: "ReluxDesktop",
                href: "https://relux.com/en/relux-desktop.html",
              },
              {
                label: "ReluxNet",
                href: "https://relux.com/en/search/luminaires/",
              },
            ],
          },
          {
            title: "Imprint",
            items: [
              {
                label: "Legal notice",
                to: "imprint",
              },
              {
                label: "Data Protection Policy",
                to: "privacy-policy",
              },
            ],
          },
        ],
        copyright: `
      © ${new Date().getFullYear()} DIAL GmbH & RELUX Informatik AG. All rights reserved.<br />
      Created with <a href ='https://github.com/facebook/docusaurus' target='_blank'>Docusaurus</a>.
      `,
      },
      prism: {
        defaultLanguage: "xml",
        additionalLanguages: ["csharp"],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // scripts: [
      //   {
      //     src: 'https://s.imgur.com/min/embed.js',
      //     async: true,
      //   },
      // ],
    }),
};

module.exports = config;
