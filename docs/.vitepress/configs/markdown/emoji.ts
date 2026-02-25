// TODO: Add more icons as needed and remove unused ones
import type { IconifyJSON } from "@iconify-json/octicon";
import type { MarkdownRenderer } from "vitepress";

// Icons that need to be used should be imported here
import { icons as akar } from "@iconify-json/akar-icons";
import { icons as ic } from "@iconify-json/ic";
import { icons as iconoir } from "@iconify-json/iconoir";
import { icons as logos } from "@iconify-json/logos";
import { icons as lucide } from "@iconify-json/lucide";
import { icons as materials } from "@iconify-json/material-symbols";
import { icons as mdi } from "@iconify-json/mdi";
import { icons as mingcute } from "@iconify-json/mingcute";
import { icons as octicon } from "@iconify-json/octicon";
import { icons as ri } from "@iconify-json/ri";
import { icons as simple } from "@iconify-json/simple-icons";
import { icons as twemoji } from "@iconify-json/twemoji";
import { icons as uil } from "@iconify-json/uil";

// 1. Install emoji pack with `pnpm add -D @iconify-json/<icon>`
// 2. Import them like I did above
// 3. Add it to this emojis array, like I did for octicon, and add a prefix
const emojis: { pack: IconifyJSON; prefix?: string }[] = [
  // Default emojis (twemoji)
  { pack: twemoji },
  // octicon emojis, prefixed with "octicon-"
  { pack: octicon, prefix: "octicon-" },
  { pack: logos, prefix: "logos-" },
  { pack: ic, prefix: "ic-" },
  { pack: mingcute, prefix: "mingcute-" },
  { pack: mdi, prefix: "mdi-" },
  { pack: materials, prefix: "material-symbols-" },
  { pack: simple, prefix: "simple-icons-" },
  { pack: lucide, prefix: "lucide-" },
  { pack: uil, prefix: "uil-" },
  { pack: ri, prefix: "ri-" },
  { pack: akar, prefix: "akar-icons-" },
  { pack: iconoir, prefix: "iconoir-" },
];

// Add aliases here...
const aliases: Record<string, string> = {
  // System & Environment
  win: "simple-icons-windows",
  lin: "simple-icons-linux",
  app: "simple-icons-apple",
  cmd: "material-symbols-terminal-rounded",
  web: "mdi-web",
  mc: "mdi-minecraft",

  // Minecraft Mod Loaders
  frg: "mdi-anvil", // Forge (Anvil)
  fab: "mdi-seed-outline", // Fabric (Seed)
  quilt: "mdi-layers-triple", // Quilt

  // Economy & Gameplay
  bz: "mdi-chart-line",
  ah: "mdi-gavel",
  pvp: "mdi-sword-cross", // Added for PvP-specific mods/tools
  cbt: "mdi-sword",
  for: "mdi-pine-tree",
  min: "mdi-pickaxe",
  far: "mdi-hoe",
  fsh: "mdi-fish",
  slay: "mdi-skull",

  // Source & Community
  gh: "simple-icons-github",
  src: "mdi-package-variant",
  cs: "mdi-package-variant-closed-remove",

  // Social
  d: "simple-icons-discord",
  red: "simple-icons-reddit",
  yt: "simple-icons-youtube",
  x: "simple-icons-twitter",
  f: "simple-icons-facebook",
  insta: "simple-icons-instagram",
  tele: "simple-icons-telegram",
  foru: "mdi-forum",
  wiki: "mdi-book-open-variant",
  pat: "simple-icons-patreon",

  // Mods, Resource & Texture Packs
  e: "mdi-puzzle", // Mod
  mp: "material-symbols-package-2-outline",
  rp: "mdi-texture-box", // Resource Pack icon
  tp: "material-symbols-texture", // Texture Pack (Alternative)

  // Mod & Pack Sources
  mr: "simple-icons-modrinth", // Modrinth (Preferred for Minecraft)
  cf: "simple-icons-curseforge", // CurseForge

  // Status & Logic
  yes: "twemoji-check-mark-button", // Yes / Available
  no: "twemoji-cross-mark", // No / Unavailable
  n: "material-symbols-science", // Nightly / Dev builds
  alt: "ic-round-looks-two", // Alternative
  s: "twemoji-glowing-star", // Featured
  global: "twemoji-globe-showing-asia-australia", // Global

  // Price
  paid: "ic-round-attach-money",
  free: "ic-round-money-off-csred",
  fp: "ic-round-add-shopping-cart", // Free site with paid content/features
  sub: "ic-round-currency-exchange",
  coin: "akar-icons-coin",

  // Others
  feed: "material-symbols-feedback", // Added Feedback
  more: "mdi-arrow-right-bold", // More Info
  api: "material-symbols-api",
  stst: "mdi-chart-bar",
  acc: "material-symbols-person-add",
  help: "material-symbols-help",
};
// Custom icons using UnoCSS inline collection
const customIconAliases: Record<string, string> = {
  "custom-circle": "inline-circle",
  // Add more custom icon aliases here
};

const defs: Record<string, string> = {};

// Add pack icons to defs
for (const elem of emojis) {
  for (const key in elem.pack.icons) {
    if (elem.prefix) defs[elem.prefix + key] = "";
    else defs[key] = "";
  }
}

// Add custom icon aliases to defs
for (const [alias, _] of Object.entries(customIconAliases)) {
  defs[alias] = "";
}

for (const [alias, fullName] of Object.entries(aliases)) {
  defs[alias] = defs[fullName] !== undefined ? "" : "INVALID_ALIAS";
}

export { aliases, defs };

export function emojiRender(md: MarkdownRenderer) {
  md.renderer.rules.emoji = (tokens, idx) => {
    const markup = tokens[idx].markup;

    // Check for custom icon aliases first
    if (customIconAliases[markup]) {
      return `<span class="i-${customIconAliases[markup]}"></span>`;
    }

    // Check for aliases
    if (aliases[markup]) {
      return `<span class="i-${aliases[markup]}"></span>`;
    }

    // Check for prefixed icons
    for (const emoji of emojis) {
      if (markup.startsWith(emoji.prefix!)) {
        return `<span class="i-${markup}"></span>`;
      }
    }

    // Default to twemoji
    return `<span class="i-twemoji-${markup}"></span>`;
  };
}

export function movePlugin(
  plugins: { name: string }[],
  pluginAName: string,
  order: "before" | "after",
  pluginBName: string,
) {
  const pluginBIndex = plugins.findIndex((p) => p.name === pluginBName);
  if (pluginBIndex === -1) return;

  const pluginAIndex = plugins.findIndex((p) => p.name === pluginAName);
  if (pluginAIndex === -1) return;

  if (order === "before" && pluginAIndex > pluginBIndex) {
    const pluginA = plugins.splice(pluginAIndex, 1)[0];
    plugins.splice(pluginBIndex, 0, pluginA);
  }

  if (order === "after" && pluginAIndex < pluginBIndex) {
    const pluginA = plugins.splice(pluginAIndex, 1)[0];
    plugins.splice(pluginBIndex, 0, pluginA);
  }
}
