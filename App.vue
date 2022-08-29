<template>
  <div>
    <Timer :nextPrayer="prayerStore.prayers[prayerStore.nextPrayerIndex] || null" :timeLeft="timerStore.nextPrayerTimeLeft" />
    <TheDate class="heading" v-once />
    <Prayer v-for="(prayer, i) in prayerStore.prayers" :key="i" :prayer="prayer" />
  </div>
</template>

<script lang="ts" setup>
import { usePrayerStore, useTimerStore } from "!stores";
import * as Api from "!api";
import { PrayerController } from "~~/controllers/Prayer";
import { TimerController } from "~~/controllers/Timer";
import { storeToRefs } from "pinia";

const prayerStore = usePrayerStore();
const timerStore = useTimerStore();

const apiResult = await Api.get();

// @ts-ignore
// initial load
prayerStore.prayers = PrayerController.processApiResult(apiResult);
prayerStore.prayers = PrayerController.processNextPrayer(prayerStore.prayers);
prayerStore.nextPrayerIndex = PrayerController.nextPrayerIndex(prayerStore.prayers);

// begin timer
const Counter = new TimerController(timerStore);
Counter.start(prayerStore.prayers);

// watchers
const { finished } = storeToRefs(timerStore);
watch(finished, (isFinished) => {
  if (!isFinished) return;

  prayerStore.prayers = PrayerController.processPreviousPrayer(prayerStore.prayers);
  prayerStore.prayers = PrayerController.processNextPrayer(prayerStore.prayers);
  prayerStore.nextPrayerIndex = PrayerController.nextPrayerIndex(prayerStore.prayers);

  if (PrayerController.nextPrayerIndex(prayerStore.prayers) === -1) return;
  Counter.start(prayerStore.prayers);
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
