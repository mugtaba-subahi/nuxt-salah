import { defineStore } from "pinia";
import { GetPrayersApiResponse, PrayerItem } from "!interfaces";

export const useStore = defineStore("store", {
  state: () => ({
    apiResult: {} as GetPrayersApiResponse,
    prayers: [] as PrayerItem[],
    nextPrayerIndex: -1,
    nextPrayerTimeLeft: "..."
  })
});
