import TinyTimer from "tiny-timer";
import dayjs from "dayjs";

import Store from "!store";
import { IPrayer } from "!controllers/PrayerTimesController/interfaces";
import convert24hrToMillisecondHelper from "!utils/convert24hrToMillisecond";

class TimerController {
  public static setTimer(): void {
    const store = Store();

    if (store.nextPrayerIndex === -1) return;

    const nextPrayer: IPrayer = store.prayers[store.nextPrayerIndex];
    const nextPrayerTime = convert24hrToMillisecondHelper(nextPrayer.time);

    const now: number = new Date().getTime();
    const remainder: number = nextPrayerTime - now;

    const timer = new TinyTimer();
    timer.start(remainder);

    timer.on("tick", (tick: number) => {
      const timeLeft = dayjs("2000-01-01 00:00:00").add(tick, "ms").format("H[h] m[min] s[s]");

      store.nextPrayerTimeLeft = timeLeft;
    });

    timer.on("done", () => {
      store.prayers[store.nextPrayerIndex].passed = true;
      store.prayers[store.nextPrayerIndex].isNext = false;
      TimerController.setNextPrayer();
    });
  }

  public static setNextPrayer(): void {
    const store = Store();

    store.nextPrayerIndex = store.prayers.findIndex((item: IPrayer) => !item.passed);

    if (store.nextPrayerIndex === -1) return;

    store.prayers[store.nextPrayerIndex].isNext = true;
    TimerController.setTimer();
  }
}

export default TimerController;
