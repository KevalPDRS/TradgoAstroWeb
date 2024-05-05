import { PrimeVueResolver } from "unplugin-vue-components/resolvers";
import AutoImportComponents from "unplugin-vue-components/vite";

export const autoImportComponent = () =>
  AutoImportComponents({
    /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
    dirs: ["src/components"], // allow auto load markdown components under ./src/components/
    extensions: ["vue", "md"], // allow auto import and register components used in markdown
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.mdx?/],
    resolvers: [PrimeVueResolver()], // Auto-import using resolvers
    dts: "./.astro/components.d.ts",
  });
