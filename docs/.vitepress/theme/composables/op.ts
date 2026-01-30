import posthog from "posthog-js";
import { inBrowser } from "vitepress";

if (inBrowser) {
  posthog.init("phc_3g4cF7B0VCt9cQ5EZGR7mFIoMunnRZ4Sjw3lwKk3SvU", {
    api_host: "https://us.i.posthog.com",
    autocapture: false,
    capture_pageview: false,
    capture_pageleave: true,
    person_profiles: "always",
  });
}

export const op = {
  track: (eventName: string, properties?: Record<string, any>) => {
    if (inBrowser) {
      posthog.capture(eventName, properties);
    }
  },

  identify: (userId: string) => {
    if (inBrowser) {
      posthog.identify(userId);
    }
  },
};

export const usePostHog = () => posthog;
