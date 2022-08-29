<template>
  <div>
    <!-- <Timer :nextPrayer="store.prayers[store.nextPrayerIndex]" :timeLeft="store.nextPrayerTimeLeft" /> -->
    <TheDate class="heading" v-once />
    <PrayerItem v-for="(prayer, i) in store.prayers" :key="i" :prayer="prayer" />
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "!stores";
import * as Api from "!api";
import { PrayersController } from "~~/controllers/Prayers";

const store = useStore();

// const apiResult = await Api.get();
const apiResult = {
  fajr: "02:40",
  sunrise: "02:41"
};

// @ts-ignore
const PrayersCon = new PrayersController(apiResult);
const prayers = PrayersCon.processData();

store.prayers = prayers;

//
//
//
//
//
//
// import { storeToRefs } from "pinia";
// import { useStore } from "!store";
// import LondonPrayerTimesController from "~~/controllers/PrayerList";
// import TimerController from "!controllers/Timer";
// import { prayerNamesEnglish } from "!global";

// const store = useStore();

// const { nextPrayerIndex } = storeToRefs(store);

// const LondonCon = new LondonPrayerTimesController(store);

// await LondonCon.buildPrayerTimes();

// const timer = new TimerController(store, LondonCon);
// store.nextPrayerIndex = store.prayers.findIndex((prayer: any) => !prayer.passed);

// timer.start();

// watch(nextPrayerIndex, (nextPrayerIndex) => {
//   if (nextPrayerIndex < 0 || nextPrayerIndex > prayerNamesEnglish.length - 1) return;
//   timer.start();
// });
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
