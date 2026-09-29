import sitemap from "@astrojs/sitemap";
import AstroPWA from "@vite-pwa/astro";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://gamberoillecito.github.io",
  base: "/le-mie-foto",
  integrations: [AstroPWA()],
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap()],
  prefetch: true,
  vite: {
    ssr: {
      noExternal: ["smartypants"],
    },
  },
});
