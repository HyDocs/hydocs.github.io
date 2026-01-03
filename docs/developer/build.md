---
title: Start
description: Getting started with HyDocs development and contribution
---

# Getting started

## Local Environment

:::tabs

== Step 1

### Installing prerequisites

1. :logos-git-icon: [Git](https://git-scm.com/)
2. :logos-nodejs-icon-alt: [Node JS](https://nodejs.org/en)
3. :logos-pnpm: [pnpm](https://pnpm.io/)

Open PowerShell as **Administrator** and run these commands to set up your environment using Chocolatey:

```bash
# Download and install Chocolatey (Windows Package Manager):
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Install Git for version control:
choco install git -y

# Install Node.js (LTS version recommended for VitePress):
choco install nodejs -y

# Enable pnpm via Corepack:
corepack enable pnpm

# Verify installations:
git -v
node -v
pnpm -v
```

== Step 2

### Cloning the Project

To clone the HyDocs repository to your local machine, run:

```bash
git clone [https://github.com/HyDocs/hydocs.github.io.github.io.git](https://github.com/HyDocs/hydocs.github.io.github.io.git)
cd hydocs
```

If you only need the latest files without the full historical data (recommended for quick edits):

```bash
git clone --depth 1 [https://github.com/HyDocs/hydocs.github.io.github.io.git](https://github.com/HyDocs/hydocs.github.io.github.io.git)
```

== Step 3

### Launching HyDocs

Install the project dependencies and start the development server:

```bash

# Install node_modules:
pnpm install

# Run the local preview:
pnpm docs:dev
```

Your local index will be live at http://localhost:5173.

:::

## Icons & Visuals

HyDocs utilizes [Iconify](https://iconify.design/) to maintain a clean, high-performance interface. You can browse millions of icons at [Icones](https://icones.js.org/).

### Implementation Rules

| Section    | Style              | Example                                 |
| ---------- | ------------------ | --------------------------------------- |
| In-line    | `:package-icon:`   | `:mdi-minecraft:`                       |
| Button     | `:i-package-icon:` | `:i-simple-icons-hypixel:`              |
| Typescript | CSS Class          | `"<span class=""i-mdi:sword""></span>"` |
| Index.md   | SVG                | Raw SVG Code                            |

::: tip Custom Aliases
Frequently used Hypixel-related icons (like SkyBlock skills or ranks) are shortened using Aliases in the S[**sheet**](#sheet). These work in-line for rapid documentation.
:::

::: info Default Style
Twitter Emoji (Twemoji) is the default set for HyDocs. For standard emojis, you don't need to specify a package name—just the icon name.
:::

### Managing Icon Packs

| Action       | Command                                |
| ------------ | -------------------------------------- |
| Add New Pack | `pnpm add -D @iconify-json/<packname>` |
| Remove Pack  | `pnpm remove @iconify-json/<packname>` |

Note: After installing a pack, you must register it in `docs\.vitepress\configs\markdown\emoji.ts`.

### Contribution Rules

Consistency: Follow the tab order established in the [**sheet**](#sheet).
Spacing: No spaces between icons at the start of a resource entry.
URL Structure: Icons follow the main URL, then the source link (GitHub/Guide), then utility buttons (Wiki, Calculator).
Interactive Elements: Maintain a single space between buttons to ensure mobile-friendly clicking.
Tooltips: Always place tooltip keys at the absolute end of the line.

### Sheet (Icon Shortcuts)

::: tabs

== Frequent

| Icon     | Code       | Description                   |
| -------- | ---------- | ----------------------------- |
| :s:      | `:s:`      | Featured Resource / Essential |
| :e:      | `:e:`      | Mod / Extension               |
| :n:      | `:n:`      | Nightly / Alpha Build         |
| :feed:   | `:feed:`   | Feedback / Bug Report         |
| :yes:    | `:yes:`    | Yes / Supported               |
| :no:     | `:no:`     | No / Unavailable              |
| :global: | `:global:` | Multilingual Support          |
| :alt:    | `:alt:`    | Alternative Version           |
| :help:   | `:help:`   | Help / Docs / Guides          |
| :more:   | `:more:`   | More Info / Related           |

== System

| Icon  | Code    | Description           |
| ----- | ------- | --------------------- |
| :mc:  | `:mc:`  | Minecraft (Base Game) |
| :win: | `:win:` | Windows / Forge       |
| :lin: | `:lin:` | Linux                 |
| :app: | `:app:` | macOS                 |

== Loaders

| Icon    | Code      | Description   |
| ------- | --------- | ------------- |
| :frg:   | `:frg:`   | Forge Loader  |
| :fab:   | `:fab:`   | Fabric Loader |
| :quilt: | `:quilt:` | Quilt Loader  |

== Price

| Icon   | Code     | Description                  |
| ------ | -------- | ---------------------------- |
| :free: | `:free:` | Completely Free              |
| :fp:   | `:fp:`   | Free (Contains paid content) |
| :paid: | `:paid:` | Paid / Premium Only          |
| :sub:  | `:sub:`  | Subscription Based           |
| :pat:  | `:pat:`  | Patreon Supported            |

== Source

| Icon   | Code     | Description          |
| ------ | -------- | -------------------- |
| :gh:   | `:gh:`   | GitHub (Source Code) |
| :mr:   | `:mr:`   | Modrinth             |
| :cf:   | `:cf:`   | CurseForge           |
| :foru: | `:foru:` | Hypixel Forums       |
| :wiki: | `:wiki:` | Wiki / Fandom        |

== Social

| Icon  | Code    | Description      |
| ----- | ------- | ---------------- |
| :d:   | `:d:`   | Discord Server   |
| :x:   | `:x:`   | Twitter / X      |
| :red: | `:red:` | Reddit Community |
| :yt:  | `:yt:`  | YouTube Channel  |

== Others

| Icon   | Code     | Description         |
| ------ | -------- | ------------------- |
| :api:  | `:api:`  | Uses Hypixel API    |
| :pvp:  | `:pvp:`  | PvP Tools / Mods    |
| :bz:   | `:bz:`   | Bazaar Data         |
| :ah:   | `:ah:`   | Auction House Tools |
| :cbt:  | `:cbt:`  | Combat Skill        |
| :slay: | `:slay:` | Slayer Content      |

:::

## Tooltips

Tooltips provide technical context without cluttering the UI. Configuration is handled in `docs\.vitepress\configs\markdown\index.ts`

```ts
// Entry Example
skyblock_weight: {
  title: "Senither/Lily Weight",
  icon: "i-mdi-weight-gram",
  content: "Calculates player progression based on skills and slayer."
}
```

### Inline Tooltips

For quick, one-off information, use the inline syntax: `^[Display Text](Information that appears on hover)`
