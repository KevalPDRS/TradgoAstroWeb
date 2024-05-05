module.exports = {
  bracketSpacing: true,
  useTabs: false,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  vueIndentScriptAndStyle: true,
  trailingComma: "es5",
  endOfLine: "lf",
  bracketSameLine: true,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
