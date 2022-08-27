import { prayerNamesArabic, prayerNamesEnglish } from "~~/readonly";
import convert12To24hr from "!utils/convert12To24hr";
import convert24hrToMillisecond from "!utils/convert24hrToMillisecond";
import { IPrayer } from "!interfaces";
import { useStore } from "../store";
// import { setTimer } from "./Timer";

class PrayerTimeController {
  private store = useStore();

  constructor() {
    console.log("000000000");
    // this.store = useStore();
    console.log("11111");
  }

  public processPrayerTimes = (): void => {
    console.log("22222");
    this._setPrayerConfigs();
    this._formatPrayerTimes();
    this._setNextPrayer();
  };

  private _setPrayerConfigs = (): void => {
    const preparePrayer = (name: string, index: number): IPrayer => ({
      arabic: prayerNamesArabic[index],
      english: name,
      isNext: false,
      passed: false,
      time: this.store.apiResult[name.toLocaleLowerCase()]
    });

    const prayers: IPrayer[] = prayerNamesEnglish.map(preparePrayer);
    this.store.prayers = prayers;
  };

  private _formatPrayerTimes = (): void => {
    for (let [index, prayer] of this.store.prayers.entries()) {
      const military: string = convert12To24hr(prayer.english, prayer.time);
      const time: number = convert24hrToMillisecond(military);
      const now: number = new Date().getTime();

      this.store.prayers[index].time = military;
      this.store.prayers[index].passed = now > time;
    }
  };

  private _setNextPrayer = (): void => {
    this.store.nextPrayerIndex = this.store.prayers.findIndex((item: IPrayer) => !item.passed);
    if (this.store.nextPrayerIndex === -1) return;

    this.store.prayers[this.store.nextPrayerIndex].isNext = true;
    // setTimer();
  };
}

export default PrayerTimeController;
