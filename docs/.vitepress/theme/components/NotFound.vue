<script setup lang="ts">
import { ref } from "vue";

const imageSize = ref("550px");
</script>

<template>
  <div
    class="flex min-h-[calc(100vh-4rem)] max-h-screen items-center justify-center p-4 overflow-hidden"
  >
    <div class="text-center">
      <img
        :style="{ width: imageSize, height: 'auto' }"
        src="/asset/404.webp"
        alt="404 Image"
        class="mx-auto"
      />
      <p
        class="text-[1.25rem] sm:text-[1.5rem] mt-4 font-bold leading-tight text-white"
      >
        404
      </p>

      <div
        class="mt-3 text-sm sm:text-base text-gray-400 leading-snug space-y-2 break-words"
      >
        <p class="flex flex-wrap items-center justify-center gap-2">
          Umm.... You've been sent to Limbo!
          <img
            class="h-[1.25em] w-auto"
            src="/asset/sadjerry.webp"
            alt="Sad Icon"
          />
        </p>

        <p>It looks like this page has vanished into the void.</p>

        <p class="flex flex-wrap items-center justify-center gap-1.5">
          If you got here from a link, please click
          <span
            class="inline-flex items-center text-gray-300 hover:text-white cursor-pointer transition-colors"
          >
            <svg
              class="h-[1.25em] w-[1em]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </span>
          to report it.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-title-lg {
  font-size: 1.5rem;
  /* Font size for titles */
}

.text-body-lg {
  font-size: 1rem;
  /* Font size for body text */
}

.w-icon {
  width: 1em;
  /* Make the icon size relative to the text size */
}

.h-icon {
  height: 1.25em;
  /* Make the icon size relative to the text size */
}

.icon-container {
  display: inline-flex;
  /* Use inline-flex to control spacing within the container */
  align-items: center;
  /* Vertically center the icon/image */
  justify-content: center;
  /* Horizontally center the icon/image */
}

.icon-img {
  width: 1em;
  /* Make the image size relative to the text size */
  height: auto;
  /* Maintain aspect ratio */
}

.mx-1 {
  margin-left: 0.25em;
  /* Adjust this value for precise spacing */
  margin-right: 0.25em;
  /* Adjust this value for precise spacing */
}

@media (max-width: 640px) {
  .text-title-lg {
    font-size: 1.25rem;
    /* Adjusted font size for smaller screens */
  }

  .text-body-lg {
    font-size: 0.875rem;
    /* Adjusted font size for smaller screens */
  }

  .mx-1 {
    margin-left: 0.1em;
    /* Adjusted margin for smaller screens */
    margin-right: 0.1em;
    /* Adjusted margin for smaller screens */
  }
}

p {
  overflow-wrap: break-word;
  word-break: break-word;
}

div {
  max-height: 100vh;
  /* Prevents container from exceeding viewport height */
  overflow-y: hidden;
  /* Ensures no vertical scrollbar is visible */
}
</style>
