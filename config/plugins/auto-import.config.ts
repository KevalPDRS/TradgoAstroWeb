import AutoImportAPIs from "unplugin-auto-import/astro";
export const autoImport = () =>
  AutoImportAPIs({
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/, // .vue
      /\.md$/, // .md
      /\.mdx$/, // .mdx
    ],

    imports: [
      "vue",
      // 'vue-router',
      // 'vue-i18n',
      // 'vue/macros',
      // '@vueuse/head',
      // '@vueuse/core',
      "pinia",
    ],
    dirs: [
      /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
      "src/composables",
      "src/utils",
      "src/stores",
    ],
    vueTemplate: true,
    dts: "./.astro/auto-imports.d.ts",
  });
