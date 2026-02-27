<script setup lang="ts">
defineProps<{
  isOpen: boolean;
}>();

defineEmits<{
  (e: "close"): void;
}>();
const sections = [
  {
    title: "Frequent",
    items: [
      {
        icon: "i-lucide-star",
        label: "Featured Resource / Essential",
      },
      { icon: "i-material-symbols-science", label: "Nightly / Alpha Build" },
      { icon: "i-material-symbols-feedback", label: "Feedback / Bug Report" },
      { icon: "i-lucide-badge-check", label: "Yes / Supported" },
      { icon: "i-lucide-badge-x", label: "No / Unavailable" },
      {
        icon: "i-lucide-globe",
        label: "Multilingual Support",
      },
      { icon: "i-ic-round-looks-two", label: "Alternative Version" },
      { icon: "i-material-symbols-help", label: "Help / Docs / Guides" },
      { icon: "i-mdi-arrow-right-bold", label: "More Info / Related" },
      { icon: "i-material-symbols-info", label: "Info / Note" },
    ],
  },
  {
    title: "System",
    items: [
      { icon: "i-mdi-minecraft", label: "Minecraft (Base Game)" },
      { icon: "i-simple-icons-windows", label: "Windows / PC" },
      { icon: "i-simple-icons-linux", label: "Linux" },
      { icon: "i-simple-icons-apple", label: "macOS" },
      { icon: "i-mdi-web", label: "Web / Browser" },
      {
        icon: "i-material-symbols-terminal-rounded",
        label: "Command Line / Terminal",
      },
    ],
  },
  {
    title: "Loaders",
    items: [
      { icon: "i-mdi-anvil", label: "Forge Loader" },
      { icon: "i-mdi-seed-outline", label: "Fabric Loader" },
      { icon: "i-mdi-layers-triple", label: "Quilt Loader" },
    ],
  },
  {
    title: "Content & Packs",
    items: [
      { icon: "i-mdi-puzzle", label: "Mod / Extension" },
      { icon: "i-material-symbols-package-2-outline", label: "Modpack" },
      { icon: "i-mdi-texture-box", label: "Resource Pack" },
      { icon: "i-material-symbols-texture", label: "Texture Pack" },
    ],
  },
  {
    title: "Price",
    items: [
      { icon: "i-ic-round-money-off-csred", label: "Completely Free" },
      {
        icon: "i-ic-round-add-shopping-cart",
        label: "Free (Contains paid content)",
      },
      { icon: "i-ic-round-attach-money", label: "Paid / Premium Only" },
      { icon: "i-akar-icons-coin", label: "In-Game Coins Required" },
      { icon: "i-ic-round-currency-exchange", label: "Subscription Based" },
      { icon: "i-simple-icons-patreon", label: "Patreon Supported" },
    ],
  },
  {
    title: "Source",
    items: [
      { icon: "i-simple-icons-github", label: "GitHub (Repository)" },
      { icon: "i-simple-icons-modrinth", label: "Modrinth" },
      { icon: "i-simple-icons-curseforge", label: "CurseForge" },
      {
        icon: "i-mdi-package-variant",
        label: "Open Source / Source Available",
      },
      { icon: "i-mdi-package-variant-closed-remove", label: "Closed Source" },
      { icon: "i-mdi-forum", label: "Hypixel Forums" },
      { icon: "i-mdi-book-open-variant", label: "Wiki / Fandom" },
    ],
  },
  {
    title: "Social",
    items: [
      { icon: "i-simple-icons-discord", label: "Discord Server" },
      { icon: "i-simple-icons-x", label: "Twitter / X" },
      { icon: "i-simple-icons-reddit", label: "Reddit Community" },
      { icon: "i-simple-icons-youtube", label: "YouTube Channel" },
      { icon: "i-simple-icons-facebook", label: "Facebook" },
      { icon: "i-simple-icons-instagram", label: "Instagram" },
      { icon: "i-simple-icons-telegram", label: "Telegram" },
      { icon: "i-material-symbols-mail", label: "Email / Contact" },
    ],
  },
  {
    title: "Minecraft 1.21+",
    items: [
      { icon: "i-mdi-hammer", label: "Mace Weapon" },
      { icon: "i-mdi-weather-windy", label: "Breeze / Wind Charge" },
      { icon: "i-mdi-hammer-wrench", label: "Crafter" },
      { icon: "i-mdi-key-variant", label: "Trial / Ominous Vaults" },
      { icon: "i-mdi-shield-half-full", label: "Wolf Armor / Armadillo" },
    ],
  },
  {
    title: "Hypixel SkyBlock",
    items: [
      { icon: "i-mdi-chart-line", label: "Bazaar" },
      { icon: "i-mdi-gavel", label: "Auction House" },
      { icon: "i-mdi-sword", label: "Combat Skill" },
      { icon: "i-mdi-pickaxe", label: "Mining" },
      { icon: "i-lucide-wheat", label: "Farming" },
      { icon: "i-mdi-pine-tree", label: "Foraging" },
      { icon: "i-mdi-fish", label: "Fishing" },
      { icon: "i-mdi-skull", label: "Slayer" },
      { icon: "i-mdi-castle", label: "Dungeons" },
      { icon: "i-mdi-skull-crossbones", label: "Kuudra" },
      { icon: "i-twemoji-cyclone", label: "The Rift" },
      { icon: "i-mdi-shield-account", label: "Guilds" },
      { icon: "i-mdi-dice-multiple", label: "RNGesus" },
    ],
  },
  {
    title: "Hypixel Games",
    items: [
      { icon: "i-mdi-bed", label: "Bed Wars" },
      { icon: "i-mdi-cloud", label: "SkyWars" },
      { icon: "i-mdi-island", label: "SkyBlock" },
      { icon: "i-mdi-knife", label: "Murder Mystery" },
      { icon: "i-lucide-gamepad-2", label: "Arcade Games" },
      { icon: "i-lucide-apple", label: "UHC Champions" },
      { icon: "i-mdi-yin-yang", label: "Arena Brawl" },
      { icon: "i-lucide-hammer", label: "Build Battle" },
      { icon: "i-lucide-crosshair", label: "Cops and Crims" },
      { icon: "i-lucide-swords", label: "Duels" },
      { icon: "i-lucide-brick-wall", label: "Mega Walls" },
      { icon: "i-lucide-paint-bucket", label: "Paintball Warfare" },
      { icon: "i-mdi-lightning-bolt", label: "Quakecraft" },
      { icon: "i-mdi-sword-cross", label: "Blitz SG" },
      { icon: "i-mdi-alpha-v-box", label: "Smash Heroes" },
      { icon: "i-lucide-bomb", label: "The TNT Games" },
      { icon: "i-mdi-go-kart", label: "Turbo Kart Racers" },
      { icon: "i-mdi-bat", label: "VampireZ" },
      { icon: "i-mdi-wall", label: "The Walls" },
      { icon: "i-mdi-flag", label: "Warlords" },
    ],
  },
  {
    title: "Clients",
    items: [
      { icon: "i-icons-lion", label: "Badlion Client" },
      { icon: "i-icons-feather", label: "FeatherMC Client" },
      { icon: "i-icons-lunar", label: "Lunar Client" },
      ,
    ],
  },
  {
    title: "Gameplay & Tools",
    items: [
      { icon: "i-material-symbols-api", label: "Uses Hypixel API" },
      { icon: "i-mdi-sword-cross", label: "PvP Tools / Mods" },
      { icon: "i-mdi-chart-bar", label: "Stats / Analytics" },
      {
        icon: "i-material-symbols-person-add",
        label: "Account / Login Required",
      },
    ],
  },
];
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-9999 p-4 sm:p-6 overflow-y-auto"
      >
        <!-- Backdrop -->
        <div
          class="fixed inset-0 bg-black/50 backdrop-blur-sm"
          @click="$emit('close')"
        />

        <!-- Modal -->
        <div
          class="relative mx-auto bg-$vp-c-bg rounded-lg border-2 border-$vp-c-default-soft p-4 sm:p-6 shadow-xl w-full max-w-4xl mt-16 mb-8"
        >
          <div class="flex justify-between items-center mb-4 sm:mb-6">
            <h2
              class="text-$vp-c-text-1 text-lg sm:text-xl font-bold align-center vl-middle flex items-center"
            >
              <div class="i-lucide-badge-info text-$vp-c-text-1 mr-2" />
              Icon key
            </h2>
            <button
              class="text-$vp-c-text-2 hover:text-$vp-c-text-1 transition-colors p-1"
              @click="$emit('close')"
            >
              <div class="i-material-symbols-close text-lg" />
            </button>
          </div>

          <div class="space-y-8">
            <div v-for="section in sections" :key="section.title">
              <h3 class="text-$vp-c-text-1 font-bold mb-3">
                {{ section.title }}
              </h3>
              <div
                class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2"
              >
                <div
                  v-for="item in section.items"
                  :key="item.label"
                  class="flex flex-col items-center justify-center p-3 rounded-lg bg-$vp-c-bg-alt hover:bg-$vp-c-bg-elv transition-colors"
                >
                  <div
                    :class="[item.icon, 'text-2xl mb-1 text-$vp-c-text-1']"
                  />
                  <div class="text-$vp-c-text-2 text-xs text-center">
                    {{ item.label }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
