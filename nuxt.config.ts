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
      { rel: "apple-touch-icon", sizes: "180x180", href: "/img/icons/icon-180x180.png" },
      { rel: "manifest", href: "/manifest.json" }
    ]
  },

  components: true,

  alias: {
    "!api": resolve(__dirname, "./api"),
    "!utils": resolve(__dirname, "./utils"),
    "!config": resolve(__dirname, "./config"),
    "!assets": resolve(__dirname, "./assets"),
    "!stores": resolve(__dirname, "./stores"),
    "!globals": resolve(__dirname, "./globals"),
    "!components": resolve(__dirname, "./components"),
    "!controllers": resolve(__dirname, "./controllers")
  },

  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@nuxtjs/robots"],
  buildModules: ["nuxt-purgecss", "@nuxtjs/google-fonts", "@nuxtjs/pwa"],

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
