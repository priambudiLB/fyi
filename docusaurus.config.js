const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'priambudi.fyi',
  tagline: 'Dinosaurs are cool. But I\'m even cooler 😎.',
  url: 'https://priambudi.fyi',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'priambudiLB', // Usually your GitHub org/user name.
  projectName: 'fyi', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id', 'jp'],
  },
  themeConfig: {
    defaultMode: 'dark',
    image: 'img/logo.svg',
    // announcementBar: {
    //   id: 'support_us', // Any value that will identify this message.
    //   content:
    //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
    //   backgroundColor: '#fafbfc', // Defaults to `#fff`.
    //   textColor: '#091E42', // Defaults to `#000`.
    // },
    navbar: {
      title: '.fyi()',
      logo: {
        alt: 'priambudi.fyi',
        src: 'img/logo.svg',
        srcDark: 'img/logo.light.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: '.create()',
        },
        {
          to: '/read',
          label: '.read()',
          position: 'left'
        },
        {
          to: '/showcase',
          label: '.showcase()',
          position: 'left'
        },
        {
          to: '/wmmt',
          label: '.wmmt()',
          position: 'left'
        },
        {
          to: '/initiald',
          label: '.initial(D)',
          position: 'left'
        },
        {
          href: 'https://github.com/priambudiLB/fyi',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorials',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Connect with me',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/priambudi-bagaskara/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Read',
              to: '/read',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/priambudiLB',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Priambudi Lintang Bagaskara. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    gtag: {
      trackingID: "G-EWZ5G4808S",
    },
  },
  plugins: [
    '@docusaurus/plugin-ideal-image'
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/priambudiLB/fyi/tree/main',
          editLocalizedFiles: true
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Read | priambudi.fyi',
          blogDescription: 'Blog Bagas',
          editUrl: ({locale, blogDirPath, blogPath, permalink}) => {
            return `https://github.com/priambudiLB/fyi/tree/main/${blogDirPath}/${blogPath}`;
          },
          routeBasePath: 'read',
          feedOptions: {
            type: 'all', // required. 'rss' | 'feed' | 'all'
            title: '', // default to siteConfig.title
            description: '', // default to  `${siteConfig.title} Blog`
            copyright: `Copyright © ${new Date().getFullYear()} Priambudi Lintang Bagaskara.`,
            language: 'en', // possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
          },
          editLocalizedFiles: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5
        },
      },
    ],
  ],
};
