import { inBrowser } from "vitepress";

let posthog: any;

if (inBrowser) {
  import("posthog-js").then((module) => {
    posthog = module.default;
    posthog.init("phc_3g4cF7B0VCt9cQ5EZGR7mFIoMunnRZ4Sjw3lwKk3SvU", {
      api_host: "https://us.i.posthog.com",
      autocapture: false,
      capture_pageview: false,
      capture_pageleave: true,
      person_profiles: "always",
    });
  });
}

export const op = {
  track: (eventName: string, properties?: Record<string, any>) => {
    if (inBrowser && posthog) {
      posthog.capture(eventName, properties);
    } else if (inBrowser) {
      // If called before posthog is loaded, we can wait or ignore it.
      // Easiest is to wait briefly.
      setTimeout(() => {
        if (posthog) posthog.capture(eventName, properties);
      }, 500);
    }
  },

  identify: (userId: string) => {
    if (inBrowser && posthog) {
      posthog.identify(userId);
    }
  },
};

export const usePostHog = () => posthog;
