import { defineStore } from "pinia";
import { PrayerItem } from "!interfaces";

export interface usePrayerStoreState {
  prayers: PrayerItem[];
  nextPrayerIndex: number;
}

export const usePrayerStore = defineStore("prayers", {
  state: (): usePrayerStoreState => ({
    prayers: [],
    nextPrayerIndex: -1
  })
});

export interface useTimerStoreState {
  nextPrayerTimeLeft: string;
  finished: boolean;
}

export const useTimerStore = defineStore("timer", {
  state: (): useTimerStoreState => ({
    nextPrayerTimeLeft: "...",
    finished: false
  })
});
