import { defineStore } from "pinia";
import { ILondonPrayerTimesApi } from "!api/LondonPrayerTimes/interfaces";
import { IPrayer, IPrayerNullable } from "!interfaces";

export const useStore = defineStore("store", {
  state: () => ({
    apiResult: {} as ILondonPrayerTimesApi,
    prayers: [] as IPrayer[],
    nextPrayerIndex: -1,
    nextPrayerTimeLeft: "..."
  })
});
