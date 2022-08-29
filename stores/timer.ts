import { defineStore } from "pinia";

export interface IUseTimerStoreState {
  nextPrayerTimeLeft: string;
  finished: boolean;
}

export const useTimerStore = defineStore("timer", {
  state: (): IUseTimerStoreState => ({
    nextPrayerTimeLeft: "...",
    finished: false
  })
});
