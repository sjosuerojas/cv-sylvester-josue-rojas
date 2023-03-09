import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  base: "/cv-sylvester-josue-rojas",
  site: "https://sjosuerojas.github.io",
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    sitemap(),
  ],
});