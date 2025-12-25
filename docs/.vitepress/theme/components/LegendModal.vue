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
        icon: "i-twemoji-glowing-star",
        label: "Featured Resource / Essential",
      },
      { icon: "i-mdi-puzzle", label: "Mod / Extension" },
      { icon: "i-material-symbols-science", label: "Nightly / Alpha Build" },
      { icon: "i-material-symbols-feedback", label: "Feedback / Bug Report" },
      { icon: "i-twemoji-check-mark-button", label: "Yes / Supported" },
      { icon: "i-twemoji-cross-mark", label: "No / Unavailable" },
      {
        icon: "i-twemoji-globe-showing-asia-australia",
        label: "Multilingual Support",
      },
      { icon: "i-ic-round-looks-two", label: "Alternative Version" },
      { icon: "i-material-symbols-help", label: "Help / Docs / Guides" },
      { icon: "i-mdi-arrow-right-bold", label: "More Info / Related" },
    ],
  },
  {
    title: "System",
    items: [
      { icon: "i-mdi-minecraft", label: "Minecraft (Base Game)" },
      { icon: "i-simple-icons-windows", label: "Windows / Forge" },
      { icon: "i-simple-icons-linux", label: "Linux" },
      { icon: "i-simple-icons-apple", label: "macOS" },
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
    title: "Price",
    items: [
      { icon: "i-ic-round-money-off-csred", label: "Completely Free" },
      { icon: "i-mdi-cash-lock", label: "Free (Contains paid content)" },
      { icon: "i-ic-round-attach-money", label: "Paid / Premium Only" },
      { icon: "i-ic-round-currency-exchange", label: "Subscription Based" },
      { icon: "i-simple-icons-patreon", label: "Patreon Supported" },
    ],
  },
  {
    title: "Source",
    items: [
      { icon: "i-simple-icons-github", label: "GitHub (Source Code)" },
      { icon: "i-simple-icons-modrinth", label: "Modrinth" },
      { icon: "i-simple-icons-curseforge", label: "CurseForge" },
      { icon: "i-mdi-forum", label: "Hypixel Forums" },
      { icon: "i-mdi-book-open-variant", label: "Wiki / Fandom" },
    ],
  },
  {
    title: "Social",
    items: [
      { icon: "i-simple-icons-discord", label: "Discord Server" },
      { icon: "i-simple-icons-twitter", label: "Twitter / X" },
      { icon: "i-simple-icons-reddit", label: "Reddit Community" },
      { icon: "i-simple-icons-youtube", label: "YouTube Channel" },
    ],
  },
  {
    title: "Others",
    items: [
      { icon: "i-material-symbols-api", label: "Uses Hypixel API" },
      { icon: "i-mdi-sword-cross", label: "PvP Tools / Mods" },
      { icon: "i-mdi-chart-line", label: "Bazaar Data" },
      { icon: "i-mdi-gavel", label: "Auction House Tools" },
      { icon: "i-mdi-sword", label: "Combat Skill" },
      { icon: "i-mdi-skull", label: "Slayer Content" },
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
