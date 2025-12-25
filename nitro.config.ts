// https://nitro.unjs.io/config
export default defineNitroConfig({
  compatibilityDate: "2024-12-16",
  preset: "cloudflare_module",
  cloudflare: {
    nodeCompat: true,
  },
  runtimeConfig: {
    WEBHOOK_URL: process.env.WEBHOOK_URL,
    op: { url: process.env.OP_URL, id: process.env.OP_ID },
  },
  srcDir: "api",
  routeRules: {
    "/": {
      cors: false,
    },
  },
});
