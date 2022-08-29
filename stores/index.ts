import { defineStore } from "pinia";
import { PrayerItem } from "!interfaces";

export const usePrayerStore = defineStore("prayers", {
  state: () => ({
    prayers: [] as PrayerItem[],
    nextPrayerIndex: -1
  })
});

export const useTimerStore = defineStore("timer", {
  state: () => ({
    nextPrayerTimeLeft: "...",
    finished: false
  })
});
