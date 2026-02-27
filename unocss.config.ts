import { FileSystemIconLoader } from "@iconify/utils/lib/loader/node-loaders";
import { colors } from "./docs/.vitepress/theme/colors";
import { resolve } from "node:path";
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
} from "unocss";

// Custom icons collection
const customIcons = {
  circle:
    '<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="50"></circle></svg>',
  // Add more custom icons here as needed
};

const safelist = Object.entries(colors).flatMap(([group, shades]) =>
  Object.keys(shades).flatMap((shade) => [
    `text-${group}-${shade}`,
    `bg-${group}-${shade}`,
  ]),
);

export default defineConfig({
  content: {
    filesystem: [".vitepress/configs/constants.ts"],
  },
  safelist,
  theme: {
    easing: {
      "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      "in-expo": "cubic-bezier(0.7, 0, 0.84, 0)",
    },
    colors: {
      ...colors,
      primary: "var(--vp-c-brand-1)",
      bg: "var(--vp-c-bg)",
      "bg-alt": "var(--vp-c-bg-alt)",
      "bg-elv": "var(--vp-c-bg-elv)",
      text: "var(--vp-c-text-1)",
      "text-2": "var(--vp-c-text-2)",
      div: "var(--vp-c-divider)",

      //Purple Theme
      brand: {
        "50": "hsl(227, 100%, 96%)",
        "100": "hsl(231, 100%, 94%)",
        "200": "hsl(231, 100%, 88%)",
        "300": "hsl(233, 100%, 82%)",
        "400": "hsl(237, 98%, 74%)",
        "500": "hsl(242, 91%, 64%)",
        "600": "hsl(246, 82%, 59%)",
        "700": "hsl(248, 63%, 51%)",
        "800": "hsl(246, 59%, 41%)",
        "900": "hsl(245, 52%, 34%)",
        "950": "hsl(247, 51%, 20%)",
      },
    },
  },
  preflights: [
    {
      getCSS: () => `
        :root {
          --vp-home-hero-name-background: -webkit-linear-gradient(120deg, hsl(242, 91%, 64%) 30%, hsl(231, 100%, 88%) 70%);
          --vp-home-hero-image-background-image: linear-gradient(-45deg, hsl(242, 91%, 64%) 50%, hsl(233, 100%, 82%) 50%);
          --vp-home-hero-image-filter: blur(60px);
        }
      `,
    },
  ],
  presets: [
    presetWind4({
      preflights: {
        theme: true,
      },
    }),
    presetAttributify(),
    presetWebFonts({
      provider: "none",
      fonts: {
        serif: "Source Serif 4 Variable",
        pacifico: "Pacifico",
      },
    }),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
        "min-width": "1.2rem",
      },
      warn: false,
      collections: {
        icons: FileSystemIconLoader(resolve(__dirname, "docs/public/icons")),
        inline: customIcons,
      },
    }),
  ],
  transformers: [transformerDirectives()],
});
