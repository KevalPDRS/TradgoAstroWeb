import { fileURLToPath, URL } from "node:url";
import fs from "fs";
import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import purgecss from "astro-purgecss";
import vercel from "@astrojs/vercel/serverless";
import node from "@astrojs/node";
import UnoCSS from "unocss/astro";
// import tailwind from "@astrojs/tailwind";
import site from "./src/site";
import { autoImport } from "./config/plugins/auto-import.config";
import { autoImportComponent } from "./config/plugins/auto-import-component.config";
const { url } = site;

// https://astro.build/config
export default defineConfig({
  site: url,
  server: {
    port: +(process.env.PORT || 4800),
  },
  integrations: [
    mdx(),
    sitemap(),
    vue({
      appEntrypoint: "/src/app.ts",
      template: {
        transformAssetUrls: false,
      },
    }),
    autoImport(),
    purgecss(),
    // tailwind(),
    UnoCSS(),
  ],
  vite: {
    plugins: [
      // For details, refer to https://github.com/antfu/unplugin-vue-components#configuration
      autoImportComponent(),
    ],
    define: {
      _GITLOG_: fs.existsSync("./.astro/git.json")
        ? JSON.parse(fs.readFileSync("./.astro/git.json").toString())
        : (console.warn("No git log file found. Please run log.ts") as never) ||
          {},
    },
    resolve: {
      alias: {
        /* Must be either an object, or an array of { find, replacement, customResolver } pairs. */
        /* Refer to: https://vitejs.dev/config/shared-options.html#resolve-alias */
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "~": fileURLToPath(new URL("./public", import.meta.url)),
        "~~": fileURLToPath(new URL("./", import.meta.url)),
      },
    },
  },
  output: "hybrid",
  adapter:
    process.env.ADAPTOR === "vercel"
      ? vercel()
      : node({
          mode: "standalone",
        }),
});
