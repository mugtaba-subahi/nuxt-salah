import { defineStore } from "pinia";
import { ILondonPrayerTimesApi } from "!api/LondonPrayerTimes/interfaces";
import { IPrayer } from "!interfaces";

export const useStore = defineStore("store", {
  state: () => ({
    apiResult: {} as ILondonPrayerTimesApi,
    prayers: [] as IPrayer[],
    nextPrayerIndex: -1,
    nextPrayerTimeLeft: "..."
  })
});
