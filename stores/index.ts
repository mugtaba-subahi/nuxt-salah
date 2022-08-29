import { defineStore } from "pinia";
import { PrayerItem } from "!interfaces";

export const useStore = defineStore("store", {
  state: () => ({
    prayers: [] as PrayerItem[],
    nextPrayerIndex: -1,
    nextPrayerTimeLeft: "..."
  })
});
