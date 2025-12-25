---
title: Home
layout: home

hero:
  name: "HyDocs"
  text: "The Hypixel Network Index"
  tagline: "Your one-stop directory for safe tools, mods, and resources."
  announcement:
    title: "New to Skyblock? Check out our Safety Guide"
    link: /safety
  image:
    src: \asset\logo.webp
    alt: HyDocs Logo
  actions:
    - theme: brand
      text: Get Started
      link: /quick-start
    - theme: alt
      text: Contribute
      link: /other/contributing
    - theme: alt
      text: Discord
      link: https://discord.gg/QMseZUzJdK

aside: left

customDescription: The ultimate open-source resource hub for the entire Hypixel Network.

features:
  - title: Mods & Clients
    details: Verified Forge and Fabric mods for 1.8.9 and modern Minecraft.
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 8-9-5-9 5v8l9 5 9-5V8z"/><path d="M12 22V12"/><path d="m22 7-10 5L2 7"/></svg>
    link: /mods
  - title: Skyblock Tools
    details: Profile viewers, bazaar trackers, and weight calculators.
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
    link: /skyblock/tools
  - title: PvP & Stats
    details: Resources for Bedwars, Duels, and competitive leaderboards.
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
    link: /stats
  - title: Safety First
    details: Learn how to avoid rats, session id stealers, and scams.
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    link: /safety
---

<script setup>
import DevOnly from './.vitepress/theme/components/DevOnly.vue'
</script>

<DevOnly>
  <div class="vp-doc vp-doc-content">
    Sandbox: <a href="/sandbox">/sandbox</a>
  </div>
</DevOnly>
