import { inBrowser } from "vitepress";

let posthog: any;
if (inBrowser) {
  import("posthog-js").then((module) => {
    posthog = module.default;
  });
}

export type TrackHandlerPayload = any;
export type TrackPayload = {
  name: string;
  properties?: Record<string, unknown>;
  profileId?: string;
};
export type TrackProperties = Record<string, unknown>;
export type IdentifyPayload = {
  profileId: string;
  properties?: Record<string, unknown>;
};
export type AliasPayload = { profileId: string; alias: string };
export type IncrementPayload = any;
export type DecrementPayload = any;
export type InternalOptions = any;

export class InternalAPI {
  constructor(public options: InternalOptions) {}

  init() {}
  ready() {}

  async track(name: string, properties?: TrackProperties) {
    if (inBrowser && posthog) posthog.capture(name, properties);
  }

  async identify(payload: IdentifyPayload) {
    if (inBrowser && posthog && payload.profileId) {
      posthog.identify(payload.profileId, payload.properties);
    }
  }

  setGlobalProperties(properties: Record<string, unknown>) {
    if (inBrowser && posthog) posthog.register(properties);
  }

  clear() {
    if (inBrowser && posthog) posthog.reset();
  }
  async alias(payload: AliasPayload) {
    if (inBrowser && posthog) posthog.alias(payload.alias, payload.profileId);
  }

  async increment(payload: IncrementPayload) {}
  async decrement(payload: DecrementPayload) {}
  flush() {}
  async send(payload: any) {}
}
