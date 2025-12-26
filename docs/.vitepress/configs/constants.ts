import type { DefaultTheme } from "vitepress";

export const hostname: string = "https://hydocs.github.io";
export const excludedFiles = ["t.md", "sandbox.md"];

// @unocss-include
export const nav: DefaultTheme.NavItem[] = [];

export const sidebar: DefaultTheme.Sidebar = [
  // --- CORE SECTIONS ---
  {
    text: '<span class="i-lucide:zap"></span> Quick Start',
    link: "/quick-start",
  },
  {
    text: '<span class="i-lucide:alert-circle"></span> Safety Guide',
    link: "/safety-guide",
  },
  {
    text: '<span class="i-lucide:globe"></span> Websites',
    link: "/websites",
  },
  {
    text: '<span class="i-lucide:box"></span> Modpacks',
    link: "/modpacks",
  },

  // --- GAME MODES ---
  {
    text: '<span class="i-lucide:sword"></span> Skyblock',
    collapsed: false,
    link: "/skyblock",
    items: [
      { text: "General Tools", link: "/skyblock/tools" },
      { text: "Dungeons", link: "/skyblock/dungeons" },
      { text: "Mining & Farming", link: "/skyblock/skills" },
      { text: "Slayers", link: "/skyblock/slayers" },
      { text: "Solvers", link: "/skyblock/solvers" },
    ],
  },
  {
    text: '<span class="i-lucide:swords"></span> PvP Games',
    collapsed: true,
    link: "/pvp",
    items: [
      { text: "Bedwars", link: "/pvp/bedwars" },
      { text: "Duels", link: "/pvp/duels" },
      { text: "Skywars", link: "/pvp/skywars" },
      { text: "The Pit", link: "/pvp/pit" },
    ],
  },
  {
    text: '<span class="i-lucide:hammer"></span> Arcade & Classic',
    collapsed: true,
    link: "/arcade",
    items: [
      { text: "TNT Games", link: "/arcade/tnt" },
      { text: "Murder Mystery", link: "/arcade/murder-mystery" },
      { text: "Housing", link: "/arcade/housing" },
    ],
  },

  // --- MODDING & CLIENTS ---
  {
    text: '<span class="i-lucide:settings-2"></span> Mods & Clients',
    collapsed: true,
    link: "/mods",
    items: [
      {
        text: "Fabric Mods",
        collapsed: true,
        items: [
          { text: "Optimization", link: "/mods/fabric/optimization" },
          { text: "QoL Features", link: "/mods/fabric/qol" },
          { text: "HUDs", link: "/mods/fabric/huds" },
        ],
      },
      {
        text: "Forge Mods (1.8.9)",
        collapsed: true,
        items: [
          { text: "Essential Mods", link: "/mods/forge/essential" },
          { text: "Skyblock Addons", link: "/mods/forge/sba" },
          { text: "PVP Enhancements", link: "/mods/forge/pvp" },
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
    ],
  },

  // --- GUIDES & KNOWLEDGE ---
  {
    text: '<span class="i-lucide:book-open"></span> Guides',
    collapsed: true,
    link: "/guides",
    items: [
      { text: "Modding & Loaders",
        link: "/guides/mod",
        collapsed: true,
        items: [
          { text: "Fabric Installaion", link: "/guides/modding/fabric" },
          { text: "Forge 1.8.9 Setup", link: "/guides/modding/forge" },
          { text: "Performance Optimation", link: "/guides/modding/performance" },
          { text: "Mod Compatibility", link: "/guides/modding/compatibility" },
        ] 
      },
      { text: "Skyblock",
        link: "/guides/skyblock",
        collapsed: true,
        items: [
          { text: "Bazaar", link: "/guides/skyblock/bazaar" },
          { text: "Garden", link: "/guides/skyblock/garden" },
          { text: "Dungeons", link: "/guides/skyblock/dungeons" },
          { text: "Mining", link: "/guides/skyblock/mining" },
        ] 
      },
      { text: "Customization",
        link: "/guides/customization",
        collapsed: true,
        items: [
          { text: "Texture Pack Installation", link: "/guides/customization/texturepacks" },
          { text: "Shaders for Low-End PCs", link: "/guides/customization/shaders" },
          { text: "Custom GUI & HUD", link: "/guides/customization/gui" },
        ] 
      },
      { text: "Technical",
        link: "/guides/technical",
        collapsed: true,
        items: [
          { text: "Anti-Ratting Guide", link: "/guides/technical/security" },
          { text: "Discord Bot", link: "/guides/technical/discord" },
          { text: "Mobile (Pojav Launcher)", link: "/guides/technical/pojav" },
          { text: "User Scripts", link: "/guides/technical/scripts" },
        ] 
      },
      { text: "Troubleshoot",
        link: "/guides/troubleshoot",
        collapsed: true,
        items: [
          { text: "Connection Issues", link: "/guides/troubleshoot/connection" },
          { text: "Mod Crashes", link: "/guides/troubleshoot/crashes" },
        ]
      },
    ],
  },
  {
    text: '<span class="i-lucide:code-2"></span> Developers',
    collapsed: true,
    link: "/dev",
    items: [
      { text: "Public API", link: "/dev/api" },
      { text: "Modding Resources", link: "/dev/modding" },
      { text: "Chat Triggers", link: "/dev/chattriggers" },
    ],
  },

  // --- MISC ---
  {
    text: '<span class="i-lucide:bar-chart-3"></span> Stats & Leaderboards',
    link: "/stats",
  },
  {
    text: '<span class="i-lucide:messages-square"></span> Discords & Comm',
    link: "/community",
  },
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
    ["meta", { name: "theme-color", content: "#5241ecff" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    ["link", { rel: "icon", href: "/asset/logosmall.webp" }],
    // PWA
    [
      "link",
      { rel: "icon", href: "/asset/logosmall.webp", type: "image/svg+xml" },
    ],
    ["link", { rel: "alternate icon", href: "/asset/logosmall.webp" }],
    [
      "link",
      { rel: "mask-icon", href: "/asset/logosmall.webp", color: "#5241ecff" },
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
        href: "/asset/logosmall.webp",
        sizes: "192x192",
      },
    ],
  ],
  srcExclude: ["README.md", "sandbox/**/*.md"],
  sitemap: {
    hostname: hostname,
  },
};
