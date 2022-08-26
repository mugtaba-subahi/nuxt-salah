import { resolve } from "path";
import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: "Athan",
    meta: [
      { charset: "utf-8" },
      { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
      { name: "viewport", content: "width=device-width,initial-scale=1.0,user-scalable=no" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/img/icons/icon-180x180.png" }
    ]
  },

  components: true,

  alias: {
    "!store": resolve(__dirname, "./store"),
    "!api": resolve(__dirname, "./api"),
    "!components": resolve(__dirname, "./components"),
    "!controllers": resolve(__dirname, "./controllers"),
    "!utils": resolve(__dirname, "./utils"),
    "!assets": resolve(__dirname, "./assets"),
    "!interfaces": resolve(__dirname, "./interfaces")
  },

  modules: ["@pinia/nuxt", "@nuxtjs/pwa"],
  buildModules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss"],

  pwa: {
    meta: {
      title: "Salah1x-title",
      author: "Salah1x-author",
      mobileAppIOS: false,
      appleStatusBarStyle: "black-translucent"
    },
    manifest: {
      name: "Salah",
      short_name: "Salah",
      theme_color: "#031b4b",
      background_color: "#311473",
      display: "fullscreen",
      orientation: "portrait",
      Scope: "/",
      start_url: "/index.html",
      splash_pages: null
    },
    icon: {
      sizes: [64, 120, 144, 152, 192, 384]
    }
  },

  googleFonts: {
    families: {
      Roboto: [400]
    }
  }
});
