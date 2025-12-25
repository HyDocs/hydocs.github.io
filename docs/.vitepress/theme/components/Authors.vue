<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  page: string;
}>();

interface CreditsInfo {
  [key: string]: {
    name: string;
    avatar: string;
    // Optional.
    site?: string;
  }[];
}

const credits = {
  sample: [
    {
      name: "SAMPLE",
      avatar: "https://github.com/sample.png",
      site: "https://github.com/Sample",
    },
  ],
} satisfies CreditsInfo;

const Credits = computed(() => credits[props.page] || ([] as CreditsInfo[]));
</script>
<template>
  <div class="flex flex-wrap gap-4 pt-2">
    <span class="text-lg font-medium">By</span>
    <div v-for="(c, index) of Credits" class="flex items-center gap-2">
      <img :src="c.avatar" class="h-8 w-8 rounded-full" />
      <a v-if="c.site" :href="c.site">{{ c.name }}</a>
      <span v-else>{{ c.name }}</span>
      <span v-if="index < Credits.length - 1">•</span>
    </div>
  </div>
</template>
