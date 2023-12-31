import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  site: "https://sjosuerojas.github.io",
  base: "/cv-sylvester-josue-rojas",
  integrations: [
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
});
