<template>
  <p>looolxe</p>
</template>

<script lang="ts" setup>
import { useStore } from "../store";
import PrayerTimesController from "../controllers/PrayerTimes";

const store = useStore();

const prayerTimesController = new PrayerTimesController();
</script>

<style lang="postcss">
@tailwind base;

html,
body {
  @apply h-full;
}

body {
  font-family: "Roboto";
  background: linear-gradient(#031b4b, #660ca1);
  @apply text-white select-none p-4;
}
</style>

<style lang="postcss" scoped>
.heading {
  @apply mb-8;
}
</style>
