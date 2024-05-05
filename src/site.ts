// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  name: "Vue Designer",
  description: "Vue Designer Astro Vuetify - Quick start template",
  // logo: 'i-emojione-rocket',
  logo: "i-vscode-icons:file-type-coffeelint",
  author: "Pinegrow",
  url: "https://pg-astro-vuetify.netlify.app",
  github: "https://github.com/pinegrow/pg-nuxt-vuetify",
  defaultLocale: "en", // default
  identity: {
    type: "Organization",
  },
  twitter: "@vuedesigner",
  trailingSlash: false, // default
  titleSeparator: "|", // default
  nav: [
    { text: "home", link: "/" },

    { text: "authentication", link: "/authentication" },
    { text: "profile", link: "/profile" },
    { text: "reports", link: "/reports" },
    { text: "orderAndBooking", link: "/orderAndBooking" },
    { text: "referAndEarn", link: "/referAndEarn" },
    { text: "complaintHistory", link: "/complaintHistory" },
    { text: "helpTutorial", link: "/helpTutorial" },

    { text: "service", link: "/service" },

    { text: "about", link: "/about" },
    { text: "contact", link: "/contact" },
    { text: "privacyPolicy", link: "/privacyPolicy" },
    { text: "termsAndConditions", link: "/termsAndConditions" },
    { text: "refundPolicy", link: "/refundPolicy" },
    // { text: "service/:id", link: "/serviceId" },
    // { path: "/post/:id", name: "postDetail", component: PostsDetail },
    // { path: "/service/:id", link: "/service" },
  ],
};
