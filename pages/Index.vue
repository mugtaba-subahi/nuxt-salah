<template>
  <div>
    <Timer :nextPrayer="store.prayers[store.nextPrayerIndex]" :timeLeft="store.nextPrayerTimeLeft" />
    <Heading class="heading" v-once />
    <Prayer v-for="(prayer, i) in store.prayers" :key="i" v-bind="prayer" />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useStore } from "!store";
import LondonPrayerTimesController from "!controllers/LondonPrayerTimes";
import TimerController from "!controllers/Timer";
import { prayerNamesEnglish } from "!global";

const store = useStore();
const { nextPrayerIndex } = storeToRefs(store);

const LondonCon = new LondonPrayerTimesController(store);

await LondonCon.buildPrayerTimes();

const timer = new TimerController(store, LondonCon);
store.nextPrayerIndex = store.prayers.findIndex((prayer: any) => !prayer.passed);

timer.start();

watch(nextPrayerIndex, (nextPrayerIndex) => {
  if (nextPrayerIndex < 0 || nextPrayerIndex > prayerNamesEnglish.length - 1) return;
  timer.start();
});
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
