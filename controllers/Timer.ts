import TinyTimer from "tiny-timer";
import dayjs from "dayjs";
import convert24hrToMillisecond from "!utils/convert24hrToMillisecond";
import timeLeft from "!utils/timeLeft";
import { IBaseController } from "./interfaces";
import { IPrayer, IPrayerNullable } from "~~/interfaces";
import { prayerNamesEnglish } from "@/readonly";

class TimerController {
  private _timer = new TinyTimer();
  private store: any;
  private prayerController: IBaseController;

  constructor(Store: any, PrayerController: IBaseController) {
    this.store = Store;
    this.prayerController = PrayerController;
  }

  public start = (): void => {
    const isComplete = this.store.nextPrayerIndex < 0 || this.store.nextPrayerIndex > prayerNamesEnglish.length - 1;
    if (isComplete) return;

    const nextPrayerTime = convert24hrToMillisecond(this.store.prayers[this.store.nextPrayerIndex].time);
    const remainder = timeLeft(nextPrayerTime);

    this._timer.start(remainder);
    this._timer.on("tick", this._onTick);
    this._timer.on("done", this._onDone);
  };

  private _onTick = (tick: number): void => {
    const timeLeft = dayjs("2000-01-01 00:00:00").add(tick, "ms").format("H[h] m[min] s[s]");
    this.store.nextPrayerTimeLeft = timeLeft;
  };

  private _onDone = (): void => {
    if (this.store.nextPrayerIndex < 0 || this.store.nextPrayerIndex > prayerNamesEnglish.length - 1) return;

    // handle previous prayer
    this.store.prayers[this.store.nextPrayerIndex].passed = true;
    this.store.prayers[this.store.nextPrayerIndex].isNext = false;

    // handle next prayer
    this.store.nextPrayerIndex++;
    this.store.nextPrayerIndex = this.store.prayers.findIndex((prayer: any) => !prayer.passed);
  };
}

export default TimerController;
