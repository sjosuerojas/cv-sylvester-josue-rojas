import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  site: "https://sjosuerojas.github.io",
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    sitemap(),
  ],
});
