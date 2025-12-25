<script setup lang="ts">
import { useRouter, withBase } from "vitepress";
import { computed, reactive, ref } from "vue";
import {
  feedbackOptions,
  type FeedbackType,
  getFeedbackOption,
} from "../../types/Feedback";

const props = defineProps<{
  heading?: string;
}>();

const sluggify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9_]+/g, "-")
    .replace(/--+/g, "-")
    .replace(/(^-+|-+$)/g, "")
    .substring(0, 60);

const getURL = (heading: string) =>
  `https://hydocs.github.io${withBase(router.route.path)}#${sluggify(heading)}`;

const prompts = [
  "Help us improve the network!",
  "Found a broken link? Let us know!",
  "Is this mod outdated? Tell us!",
  "What's missing from HyDocs?",
  "Your feedback makes us safer 🛡️",
  "Spotted a rat? Report it here!",
  "We appreciate the support, Non! 🙏",
  "Is this guide helpful? 💡",
  "Tell us your thoughts on this section.",
  "Help us build the best index for Hypixel.",
  "Found a bug in the docs? 👋",
];

function getPrompt() {
  return prompts[Math.floor(Math.random() * prompts.length)];
}

const loading = ref<boolean>(false);
const error = ref<unknown>(null);
const success = ref<boolean>(false);

const isDisabled = computed(() => {
  return (
    !feedback.message.length ||
    feedback.message.length < 5 ||
    feedback.message.length > 1000
  );
});

const router = useRouter();
// prettier-ignore
const feedback = reactive<
  Pick<FeedbackType, 'message' | 'page'> & Partial<Pick<FeedbackType, 'type'>>
>({
  page: getURL(props.heading!),
  message: ''
})

const selectedOption = ref(feedbackOptions[0]);

async function handleSubmit(type?: FeedbackType["type"]) {
  if (type) {
    feedback.type = type;
    selectedOption.value = getFeedbackOption(type)!;
  }
  loading.value = true;

  const body: FeedbackType = {
    message: feedback.message,
    type: feedback.type!,
    page: feedback.page,
    ...(props.heading && { heading: props.heading }),
  };

  try {
    //TODO: Replace with your own endpoint
    const response = await fetch("https://hydocs.pixelman.workers.dev", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    if (data.error) {
      error.value = data.error;
      return;
    }
    if (data.status === "ok") {
      success.value = true;
    }
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
}

const isCardShown = ref<boolean>(false);
const helpfulText = props.heading
  ? "How is this section?"
  : "Is this page helpful?";
const helpfulDescription = props.heading
  ? "Help us refine this guide."
  : "Tell us about your experience with HyDocs.";

const prompt = computed(() => getPrompt());
const toggleCard = () => (isCardShown.value = !isCardShown.value);
</script>

<template>
  <template v-if="props.heading">
    <button
      @click="toggleCard()"
      class="bg-$vp-c-default-soft text-primary border-$vp-c-default-soft hover:border-primary ml-3 inline-flex h-7 items-center justify-center whitespace-nowrap rounded-md border-2 border-solid px-1.5 py-3.5 text-sm font-medium transition-all duration-300 sm:h-6"
    >
      <span
        :class="isCardShown === false ? `i-lucide:mail` : `i-lucide:mail-x`"
      />
    </button>
  </template>
  <template v-else>
    <button
      class="bg-$vp-c-default-soft text-primary px2 py1 border-$vp-c-default-soft hover:border-primary mt-2 select-none rounded border-2 border-solid font-bold transition-all duration-300"
      @click="toggleCard()"
    >
      <span
        :class="
          isCardShown === false ? `i-lucide:mail mr-2` : `i-lucide:mail-x mr-2`
        "
      />
      <span>Send Feedback</span>
    </button>
  </template>

  <Transition name="fade" mode="out-in">
    <div
      v-if="isCardShown"
      class="border-$vp-c-divider bg-$vp-c-bg-alt b-rd-4 m-[2rem 0] mt-4 border-2 border-solid p-6"
    >
      <Transition name="fade" mode="out-in">
        <div v-if="!feedback.type">
          <p class="heading">
            {{ helpfulText }}
          </p>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="item in feedbackOptions"
              :key="item.value"
              class="bg-bg border-$vp-c-default-soft hover:border-primary mt-2 select-none rounded border-2 border-solid font-bold transition-all duration-250 rounded-lg text-[14px] font-500 leading-normal m-0 px-3 py-1.5 text-center align-middle whitespace-nowrap"
              @click="handleSubmit(item.value)"
            >
              <span>{{ item.label }}</span>
            </button>
          </div>
        </div>
        <div v-else-if="feedback.type && !success">
          <div class="mb-2">
            <p class="desc">{{ helpfulDescription }} - {{ prompt }}</p>
            <span>{{ getFeedbackOption(feedback.type)?.label }}</span>
          </div>

          <div v-if="feedback.type === 'suggestion'" class="mb-2 text-sm">
            <details>
              <summary class="cursor-pointer font-semibold">
                <span class="i-lucide:shield-alert text-orange-400 mr-1" />
                Guidelines for Suggestions
              </summary>
              <ol class="mt-2 ml-4 list-decimal opacity-80">
                <li>
                  We do not list paid cheats or blacklisted modifications.
                </li>
                <li>Discord servers must have a clear history of safety.</li>
                <li>Software must be primarily for Minecraft/Hypixel use.</li>
                <li>No "Rat" or session-stealing software (obviously).</li>
              </ol>
            </details>
          </div>
          <textarea
            v-model="feedback.message"
            autofocus
            class="bg-$vp-c-bg-alt text-$vp-c-text-2 w-full h-[100px] border border-$vp-c-divider rounded px-3 py-1.5 border-$vp-c-divider bg-$vp-c-bg-alt b-rd-4 border-2 border-solid"
            placeholder="Tip: Did you know that starring our GitHub repo doubles the chances that your feedback will be read?"
          />
          <p class="desc mb-2">
            Need a reply? Drop your Discord tag or join our
            <a
              class="text-primary text-underline font-semibold"
              href="https://discord.gg/QMseZUzJdK"
            >
              Discord.
            </a>
          </p>
          <div class="flex flex-row gap-2">
            <button
              class="bg-$vp-c-default-soft text-primary border-$vp-c-default-soft inline-flex h-7 items-center justify-center whitespace-nowrap rounded-md border-2 border-solid px-1.5 py-3.5 text-sm font-medium transition-all duration-300 sm:h-6"
              @click="feedback.type = undefined"
            >
              <span class="i-lucide:panel-left-close">close</span>
            </button>
            <button
              type="submit"
              class="border border-div rounded-lg transition-colors duration-250 inline-block text-14px font-500 leading-1.5 px-3 py-3 text-center align-middle whitespace-nowrap disabled:opacity-50 text-text-2 bg-swarm-100 dark:bg-swarm-700 border-swarm-800 dark:border-swarm-700 disabled:bg-swarm-100 dark:disabled:bg-swarm-900 hover:border-swarm-900 dark:hover:border-swarm-800 hover:bg-swarm-200 dark:hover:bg-swarm-800"
              :disabled="isDisabled"
              @click="handleSubmit()"
            >
              Send Feedback 📩
            </button>
          </div>
        </div>
        <div v-else>
          <p class="heading">Thanks for your feedback!</p>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<style scoped lang="css">
.btn {
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg);
  border-radius: 8px;
  transition: border-color 0.25s, background-color 0.25s;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
  padding: 0.375rem 0.75rem;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
}

.btn:disabled {
  opacity: 0.5;
}

.btn:hover {
  border-color: var(--vp-c-brand);
}

.btn-primary {
  color: #fff;
  background-color: var(--vp-c-brand);
  border-color: var(--vp-c-brand);
}

.btn-primary:hover {
  background-color: var(--vp-c-brand-darker);
  border-color: var(--vp-c-brand-darker);
}

.heading {
  font-size: 1.2rem;
  font-weight: 700;
}

.desc {
  display: block;
  font-size: 12px;
  color: var(--vp-c-text-2);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
