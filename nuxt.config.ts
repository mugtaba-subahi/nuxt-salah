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
      {
        rel: "stylesheet",
        href: "httpshttps://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap&display=swap"
      }
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
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  buildModules: ["@nuxtjs/pwa"],
  target: "static"
});
