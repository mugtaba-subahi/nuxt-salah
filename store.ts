import { defineStore } from "pinia";
import { IApi } from "~~/api/LondonPrayerTimesApi/interfaces";
import { IPrayer } from "~~/controllers/PrayerTimesController/interfaces";

export default defineStore("store", {
  state: () => ({
    apiResult: {} as IApi,
    prayers: [] as IPrayer[],
    nextPrayerIndex: -1,
    nextPrayerTimeLeft: "..."
  })
});
