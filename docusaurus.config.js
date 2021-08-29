const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'KygekTeam Docs',
  tagline: 'Docs for KygekTeam',
  url: 'https://docs.kygekteam.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kygekteam', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'KygekTeam',
        src: 'img/kygekteamfull.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'home',
          position: 'right',
          label: 'Docs',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} KygekTeam. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/kygekteam/docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
