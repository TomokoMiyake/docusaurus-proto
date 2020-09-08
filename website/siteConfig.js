/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const RemarkablePlugins = require("./core/RemarkablePlugin");

const siteConfig = {
  title: "Be a smart kintone developer with kintone UI Component.",
  tagline: "It will support your UI customization project.",
  // For GitHub Pages hosting
  // url: "https://tomokomiyake.github.io",
  // baseUrl: "/docusaurus-proto/"",

  // For Netlify hosting
  url: "https://tomokomiyake.netlify.app",
  baseUrl: "/",
  projectName: "docusaurus-proto",
  organizationName: "tomokomiyake",
  headerLinks: [
    { doc: "getting-started/quick-start", label: "Documentation" },
    { doc: "tips/installation", label: "Tips" },
    { blog: true, label: "Blog" },
    // {page: "help", label: "Help"},
    {
      href: "https://github.com/TomokoMiyake/docusaurus-proto",
      label: "GitHub",
    }, // Need to change to kuc repo
    { search: true },
    { languages: false },
  ],
  headerIcon: "img/kuc_logo_white.png",
  footerIcon: "img/kuc_box_white.png",
  favicon: "img/kuc_box_yellow.png",
  colors: {
    primaryColor: "#2b3137",
    secondaryColor: "#03A9F4",
  },
  fonts: {
    myFont: ["Times New Roman", "Serif"],
    myOtherFont: ["-apple-system", "system-ui"],
  },
  copyright: `Copyright © ${new Date().getFullYear()} Cybozu Inc.`,
  highlight: {
    theme: "atom-one-dark", // "Nord", "Dracula", "Monokai Sublime"
    defaultLang: "javascript",
  },
  onPageNav: "separate",
  docsSideNavCollapsible: true,
  cleanUrl: true,
  ogImage: "img/kuc_logo.png",
  twitterImage: "img/kuc_logo.png",
  disableHeaderTitle: true,
  scrollToTop: true,
  enableUpdateTime: true,
  blogSidebarCount: "ALL",
  markdownPlugins: [RemarkablePlugins.KUCComponentRenderer],
  scripts: [
    "https://miyass.github.io/kuc-cdn/kuc.min.js",
    "/js/extra.js",
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "/js/code-block-button.js",
  ],
  stylesheets: ["/css/custom.css", "/css/code-block-button.css"],
  // gaTrackingId: "",
  // Option for Algolia DocSearch(It can be set at production-ready.)
  // algolia: {
  //   apiKey: "",
  //   indexName: ""
  // }
};

module.exports = siteConfig;
