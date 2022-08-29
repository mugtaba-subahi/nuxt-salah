<template>
  <div>
    <Timer :nextPrayer="prayerStore.prayers[prayerStore.nextPrayerIndex] || null" :timeLeft="timerStore.nextPrayerTimeLeft" />
    <TheDate class="heading" v-once />
    <Prayer v-for="(prayer, i) in prayerStore.prayers" :key="i" :prayer="prayer" />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";

import * as Api from "!api";
import { usePrayerStore } from "!stores/prayers";
import { useTimerStore } from "!stores/timer";
import { PrayerController } from "!controllers/Prayer";
import { TimerController } from "!controllers/Timer";

const prayerStore = usePrayerStore();
const timerStore = useTimerStore();
const { finished } = storeToRefs(timerStore);

const apiResult = await Api.get();

// handle prayers on load
const PrayerCon = new PrayerController(prayerStore);
PrayerCon.setApiResult(apiResult);
PrayerCon.setNextPrayer();

// handle timer on load
const TimerCon = new TimerController(timerStore);
TimerCon.start(prayerStore.prayers, prayerStore.nextPrayerIndex);

// handle timer on finish
watch(finished, (isFinished) => {
  if (!isFinished) return;

  PrayerCon.setPreviousPrayer();
  PrayerCon.setNextPrayer();

  TimerCon.start(prayerStore.prayers, prayerStore.nextPrayerIndex);
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
