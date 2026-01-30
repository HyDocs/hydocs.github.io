import type { DefaultTheme } from "vitepress";

export const hostname: string = "https://hydocs.github.io";
export const excludedFiles = ["t.md", "sandbox.md"];

// @unocss-include
export const nav: DefaultTheme.NavItem[] = [];

export const sidebar: DefaultTheme.Sidebar = [
  // --- CORE SECTIONS ---
  {
    text: '<span class="i-lucide:achor"></span> Getting Started',
    collapsed: false,
    link: "/getting-started",
    items: [
      {
        text: '<span class="i-lucide:zap"></span> Quick Start',
        link: "/quick-start",
      },
      {
        text: '<span class="i-lucide:globe"></span> Websites',
        link: "/websites",
      },
      {
        text: '<span class="i-lucide:shield"></span> Safety Guide',
        link: "/safety-guide",
      },
      {
        text: '<span class="i-lucide:circle-question-mark"></span> FAQ',
        link: "/faq",
      },
    ],
  },
  // --- GAME MODES ---
  {
    text: '<span class="i-lucide:swords"></span> Gamemodes',
    collapsed: false,
    items: [
      { text: "Skyblock", link: "/game/skyblock" },
      { text: "Bedwars", link: "/game/bedwars" },
      { text: "The Pit", link: "/game/pit" },
    ],
  },
  // {
  //   text: '<span class="i-lucide:hammer"></span> Arcade & Classic',
  //   collapsed: false,
  //   link: "/arcade",
  //   items: [
  //     { text: "TNT Games", link: "/arcade/tnt" },
  //     { text: "Murder Mystery", link: "/arcade/murder-mystery" },
  //     { text: "Housing", link: "/arcade/housing" },
  //   ],
  // },

  // --- CLIENTS ---
  {
    text: '<span class="i-lucide:hammer"></span> Tools',
    collapsed: false,
    items: [
      {
        text: "Resource Packs",
        collapsed: true,
        items: [
          { text: "Essential Packs", link: "/tools/essential-packs" },
          { text: "Skyblock Packs", link: "/tools/skyblock-packs" },
          { text: "PvP Packs", link: "/tools/pvp-packs" },
        ],
      },
      {
        text: "Mods",
        collapsed: true,
        items: [
          { text: "Essential Mods", link: "/mods/essential" },
          { text: "Skyblock", link: "/mods/skyblock" },
          { text: "PVP Enhancements", link: "/mods/pvp" },
        ],
      },
      {
        text: "Clients",
        collapsed: true,
        items: [
          { text: "Lunar Client", link: "/clients/lunar" },
          { text: "Badlion Client", link: "/clients/badlion" },
          { text: "Multi-MC / Prism", link: "/clients/launchers" },
        ],
      },
      {
        text: "Discord Bots",
        collapsed: true,
        link: "/discord-bots",
      },
    ],
  },

  // --- Community ---

  {
    text: '<span class="i-lucide:messages-square"></span> Community',
    collapsed: true,
    items: [
      { text: "Forums & Subreddits", link: "/community/forums" },
      { text: "Discord Servers", link: "/community/discords" },
      { text: "YouTube Channels", link: "/community/youtube" },
      { text: "Twitch Streamers", link: "/community/twitch" },
    ],
  },

  // --- GUIDES & KNOWLEDGE ---
  {
    text: '<span class="i-lucide:book-open"></span> Guides',
    collapsed: true,
    link: "/guides",
    items: [
      {
        text: "Modding & Loaders",
        link: "/guides/mod",
        collapsed: true,
        items: [
          { text: "Fabric Installaion", link: "/guides/modding/fabric" },
          { text: "Forge 1.8.9 Setup", link: "/guides/modding/forge" },
          {
            text: "Performance Optimation",
            link: "/guides/modding/performance",
          },
          { text: "Mod Compatibility", link: "/guides/modding/compatibility" },
        ],
      },
      {
        text: "Skyblock",
        link: "/guides/skyblock",
        collapsed: true,
        items: [
          { text: "Bazaar", link: "/guides/skyblock/bazaar" },
          { text: "Garden", link: "/guides/skyblock/garden" },
          { text: "Dungeons", link: "/guides/skyblock/dungeons" },
          { text: "Mining", link: "/guides/skyblock/mining" },
        ],
      },
      {
        text: "Customization",
        link: "/guides/customization",
        collapsed: true,
        items: [
          {
            text: "Texture Pack Installation",
            link: "/guides/customization/texturepacks",
          },
          {
            text: "Shaders for Low-End PCs",
            link: "/guides/customization/shaders",
          },
          { text: "Custom GUI & HUD", link: "/guides/customization/gui" },
        ],
      },
      {
        text: "Technical",
        link: "/guides/technical",
        collapsed: true,
        items: [
          { text: "Anti-Ratting Guide", link: "/guides/technical/security" },
          { text: "Discord Bot", link: "/guides/technical/discord" },
          { text: "User Scripts", link: "/guides/technical/scripts" },
        ],
      },
      {
        text: "Troubleshoot",
        link: "/guides/troubleshoot",
        collapsed: true,
        items: [
          {
            text: "Connection Issues",
            link: "/guides/troubleshoot/connection",
          },
          { text: "Mod Crashes", link: "/guides/troubleshoot/crashes" },
        ],
      },
    ],
  },
  {
    text: '<span class="i-lucide:code-2"></span> Developers',
    collapsed: true,
    link: "/developer",
    items: [
      { text: "Hypixel API", link: "/developer/hypixel-api" },
      { text: "Build HyDocs", link: "/developer/build" },
    ],
  },

  // --- MISC ---
  {
    text: '<span class="i-lucide:heart-handshake"></span> Credits',
    link: "/credits",
  },
];

export const siteConfig = {
  title: "HyDocs",
  description:
    "HyDocs is the ultimate community-driven index for Hypixel and Minecraft. Find safe mods, high-performance texture packs, and essential tools for SkyBlock, PvP, and technical optimization. From anti-ratting safety guides to advanced trackers for the Bazaar and Auction House, HyDocs is your one-stop-shop for a better Minecraft experience.",
  lang: "en-US",
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  appearance: true,
  titleTemplate: ":title • hydocs.github.io by as280093",
  head: [
    ["meta", { name: "theme-color", content: "#554ff6" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    ["link", { rel: "icon", href: "/asset/logosmall.png" }],
    // PWA
    [
      "link",
      { rel: "icon", href: "/asset/logosmall.png", type: "image/svg+xml" },
    ],
    ["link", { rel: "alternate icon", href: "/asset/logosmall.png" }],
    [
      "link",
      { rel: "mask-icon", href: "/asset/logosmall.png", color: "#554ff6" },
    ],
    // prettier-ignore
    [
      'meta',
      {
      name: 'keywords',
      content:
        'Hypixel, Skyblock, Hypixel Skyblock, Minecraft, Minecraft Mods, Skyblock Addons, Skyblock Solvers, Dungeons, Bedwars, Duels, PvP, Clients, Lunar Client, Badlion, Fabric, Forge, Optifine, Sodium, Resource Packs, Texture Packs, SkyCrypt, HyDocs, Wiki, Skytils, NEU, ChatTriggers'
    }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/asset/logosmall.png",
        sizes: "192x192",
      },
    ],
    [
      "style",
      {},
      `
          @font-face {
            font-family: 'Pacifico';
            src: url('/fonts/Pacifico-Regular.ttf') format('truetype');
            font-weight: 400;
            font-display: swap;
          }
          @font-face {
            font-family: 'Source Serif 4 Variable';
            src: url('/fonts/SourceSerif4-VariableFont_opsz,wght.ttf') format('truetype');
            font-display: swap;
          }
        `,
    ],
  ],
  srcExclude: ["README.md", "sandbox/**/*.md"],
  sitemap: {
    hostname: hostname,
  },
};
