import { prayerNamesArabic, prayerNamesEnglish } from "!globals";
import { GetPrayersApiResponse, PrayerItem } from "!interfaces";
import { TimerController } from "!controllers/Timer";

export class PrayerController {
  private store: any;

  constructor(store: any) {
    this.store = store;
  }

  public setNextPrayer = (): void => {
    const nextPrayerIndex = this.store.prayers.findIndex((prayer) => !prayer.passed);
    this.store.nextPrayerIndex = nextPrayerIndex;

    if (nextPrayerIndex === -1) return;
    this.store.prayers[nextPrayerIndex].isNext = true;
  };

  public setPreviousPrayer = (): void => {
    const nextPrayerIndex = this.store.prayers.findIndex((prayer) => !prayer.passed);
    if (nextPrayerIndex === -1) return;

    this.store.prayers[this.store.nextPrayerIndex].passed = true;
    this.store.prayers[this.store.nextPrayerIndex].isNext = false;
  };

  public setApiResult = (apiResult: GetPrayersApiResponse): void => {
    const prayers = prayerNamesEnglish.map((name, index): PrayerItem => {
      const prayer = {
        index,
        arabic: prayerNamesArabic[index],
        english: name,
        isNext: false,
        passed: false,
        time: apiResult[name.toLocaleLowerCase()]
      };

      const military = TimerController.convert12To24hr(prayer.english, prayer.time);
      const time = TimerController.convert24hrToMillisecond(military);
      const now = new Date().getTime();

      prayer.time = military;
      prayer.passed = now > time;

      return prayer;
    });

    this.store.prayers = prayers;
  };
}
