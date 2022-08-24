import Api from "!api/abstract";
import { IBasePrayerTimesController } from "!interfaces";
import { IApi } from "!api/LondonPrayerTimesApi/interfaces";
import Store from "!store";
import { prayerNamesArabic, prayerNamesEnglish } from "@/readonly";
import { IPrayer } from "!controllers/PrayerTimesController/interfaces";
import convert12To24hr from "!utils/convert12To24hr";
import convert24hrToMillisecond from "!utils/convert24hrToMillisecond";

class PrayerTimesController implements IBasePrayerTimesController {
  private _api: Api;
  private store = Store();

  constructor(api: Api) {
    this._api = api;
  }

  public async fetchPrayerTimes(): Promise<any> {
    this.store.apiResult = (await this._api.fetchPrayerTimes()) as IApi;

    this.setPrayerConfigs();
    this.formatPrayerTimes();
    this.setNextPrayer();

    return this.store.prayers;
  }

  private setPrayerConfigs(): void {
    const preparePrayer = (name: string, index: number): IPrayer => ({
      arabic: prayerNamesArabic[index],
      english: name,
      isNext: false,
      passed: false,
      time: this.store.apiResult[name.toLocaleLowerCase()]
    });

    const prayers: IPrayer[] = prayerNamesEnglish.map(preparePrayer);
    this.store.prayers = prayers;
  }

  private setNextPrayer(): void {
    this.store.nextPrayerIndex = this.store.prayers.findIndex((item: IPrayer) => !item.passed);

    if (this.store.nextPrayerIndex === -1) return;

    this.store.prayers[this.store.nextPrayerIndex].isNext = true;
  }

  private formatPrayerTimes(): void {
    for (let [index, prayer] of this.store.prayers.entries()) {
      // console.log("🚀 > file: controller.ts > line 51 > PrayerTimesController > formatPrayerTimes > prayer", prayer);

      const military: string = convert12To24hr(prayer.english, prayer.time);
      const time: number = convert24hrToMillisecond(military);
      const now: number = new Date().getTime();

      this.store.prayers[index].time = military;
      this.store.prayers[index].passed = now > time;
    }
  }
}

export default PrayerTimesController;
