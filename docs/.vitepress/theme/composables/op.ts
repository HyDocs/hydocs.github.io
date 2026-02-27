import { inBrowser } from "vitepress";

let posthog: any;
let isLoaded = false;
let queue: any[] = [];

if (inBrowser) {
  import("posthog-js").then((module) => {
    posthog = module.posthog || module.default;

    if (typeof window !== "undefined") {
      (window as any).posthog = posthog;
    }

    if (posthog && typeof posthog.init === "function") {
      posthog.init("phc_3g4cF7B0VCt9cQ5EZGR7mFIoMunnRZ4Sjw3lwKk3SvU", {
        api_host: "https://us.i.posthog.com",
        autocapture: false,
        capture_pageview: false,
        capture_pageleave: true,
        person_profiles: "always",
        loaded: (ph: any) => {
          isLoaded = true;
          queue.forEach(({ type, args }) => {
            if (type === "capture") ph.capture(...args);
            if (type === "identify") ph.identify(...args);
          });
          queue = [];
        },
      });
    } else {
      //console.error("PostHog could not be initialized");
    }
  });
}

export const op = {
  track: (eventName: string, properties?: Record<string, any>) => {
    if (!inBrowser) return;
    if (isLoaded) {
      posthog.capture(eventName, properties);
    } else {
      queue.push({ type: "capture", args: [eventName, properties] });
    }
  },

  identify: (userId: string) => {
    if (!inBrowser) return;
    if (isLoaded) {
      posthog.identify(userId);
    } else {
      queue.push({ type: "identify", args: [userId] });
    }
  },
};

export const usePostHog = () => posthog;
