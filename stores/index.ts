import { defineStore } from "pinia";
import { PrayerItem } from "!interfaces";
import { GetPrayersReponse } from "!api";

export const useStore = defineStore("store", {
  state: () => ({
    apiResult: {} as GetPrayersReponse,
    prayers: [] as PrayerItem[],
    nextPrayerIndex: -1,
    nextPrayerTimeLeft: "..."
  })
});
