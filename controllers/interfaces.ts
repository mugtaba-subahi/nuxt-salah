import { IPrayer, IPrayerNullable } from "~~/interfaces";

export interface IBaseController {
  // get nextPrayerIndex(): number;

  buildPrayerTimes(): Promise<void>;
  setNextPrayerIndex(): void;
}
