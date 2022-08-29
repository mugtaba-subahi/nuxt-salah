import TinyTimer from "tiny-timer";
import dayjs from "dayjs";
import convertTime from "convert-time";

import { PrayerItem } from "!interfaces";
import { PrayerController } from "!controllers/Prayer";

export class TimerController {
  private _timer = new TinyTimer();
  private store: any;

  constructor(store: any) {
    this.store = store;
  }

  public start = (prayersList: PrayerItem[], nextPrayerIndex: number): void => {
    if (nextPrayerIndex === -1) return;

    const nextPrayerTime = TimerController.convert24hrToMillisecond(prayersList[nextPrayerIndex].time);
    const remainder = nextPrayerTime - new Date().getTime();

    this.store.finished = false;

    this._timer.start(remainder);
    this._timer.on("tick", this._onTick);
    this._timer.on("done", this._onDone);
  };

  private _onTick = (tick: number): void => {
    const timeLeft = dayjs("2000-01-01 00:00:00").add(tick, "ms").format("H[h] m[min] s[s]");
    this.store.nextPrayerTimeLeft = timeLeft;
  };

  private _onDone = (): void => {
    this.store.finished = true;
  };

  // Utils
  private static validateTime = (time: string): boolean => {
    const militaryTimeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

    if (typeof time !== "string") return false;
    else if (!time.match(militaryTimeRegex)) return false;
    else return true;
  };

  public static convert12To24hr = (name: string, time: string): string => {
    const isValidTime: boolean = TimerController.validateTime(time);
    if (!isValidTime) throw { error: true, message: "Invalid time" };

    if (name === "Dhuhr") {
      const [dhuhr_hour] = time.split(":");

      // check if dhuhr is in afternoon or morning. 5(pm)
      if (+dhuhr_hour < 5) return convertTime(`${time} PM`, "hh:MM");
    }

    const pmPrayers: string[] = ["Asr", "Magrib", "Isha"];
    if (pmPrayers.indexOf(name) !== -1) return convertTime(`${time} PM`, "hh:MM");

    return time;
  };

  public static convert24hrToMillisecond = (time: string): number => {
    const isValidTime: boolean = TimerController.validateTime(time);
    if (!isValidTime) throw { error: true, message: "Invalid time" };

    const [hour, minute] = time.split(":");

    const now = new Date();
    now.setHours(+hour);
    now.setMinutes(+minute);
    now.setSeconds(0);

    return now.getTime();
  };
}
