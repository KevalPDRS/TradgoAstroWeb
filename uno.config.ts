// uno.config.ts
import { defineConfig } from "unocss";
import presetUno from "@unocss/preset-uno";

export default defineConfig({
  presets: [presetUno()],
  theme: {
    colors: {
      primary: "#20A7DB", // class="bg-primary"
      secondary: "#1B1464", // class="text-secondary"
      title: "#0C2F54",
      text: "#535B61",
      starOn: "#F1B42F",
      starOff: "#D9D9D9",
      coolGrey: "#8D89B2",
      black: "#000000",
      darkGrey: "#212529",
      grey: "#808080",
      lightGrey: "#F8F9FA",
      white: "#FFFFFF",
      important: "#0D6EFD",
      success: "#198754",
      information: "#0DCAF0",
      warning: "#FFC107",
      danger: "#DC3545",
      // brand: {
      //   primary: "hsl(var(--hue, 217) 78% 51%)", //class="bg-brand-primary"
      // },
    },
    breakpoints: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
  },
});
