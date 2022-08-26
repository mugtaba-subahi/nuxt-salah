<template>
  <Timer />
  <Heading class="heading" />
  <Prayer v-for="(prayer, index) in store.prayers" :key="index" v-bind="prayer" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import LondonPrayerTimesApi from "!api/LondonPrayerTimesApi/api";
import PrayerTimesController from "!controllers/PrayerTimesController/controller";
import TimerController from "!controllers/TimerController/controller";
import Store from "!store";

const store = Store();
let isLoading = ref(true);

const londonPrayerTimesApi = new LondonPrayerTimesApi();
const prayerController = new PrayerTimesController(londonPrayerTimesApi);

await prayerController.fetchPrayerTimes();
TimerController.setTimer();

isLoading.value = false;
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
