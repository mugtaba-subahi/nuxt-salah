// import { useStore } from "../store";
// import { prayerNamesArabic, prayerNamesEnglish } from "~~/readonly";
// import convert12To24hr from "!utils/convert12To24hr";
// import convert24hrToMillisecond from "!utils/convert24hrToMillisecond";
// import { IPrayer } from "!interfaces";
// import { setTimer } from "./Timer";

// let store = null;

// class PrayerTimeController {
//   processPrayerTimes = (): void => {
//     setPrayerConfigs();
//     formatPrayerTimes();
//     setNextPrayer();
//   };

//   setPrayerConfigs = (): void => {
//     const preparePrayer = (name: string, index: number): IPrayer => ({
//       arabic: prayerNamesArabic[index],
//       english: name,
//       isNext: false,
//       passed: false,
//       time: store.apiResult[name.toLocaleLowerCase()]
//     });

//     const prayers: IPrayer[] = prayerNamesEnglish.map(preparePrayer);
//     store.prayers = prayers;
//   };

//   formatPrayerTimes = (): void => {
//     for (let [index, prayer] of store.prayers.entries()) {
//       const military: string = convert12To24hr(prayer.english, prayer.time);
//       const time: number = convert24hrToMillisecond(military);
//       const now: number = new Date().getTime();

//       store.prayers[index].time = military;
//       store.prayers[index].passed = now > time;
//     }
//   };

//   setNextPrayer = (): void => {
//     store.nextPrayerIndex = store.prayers.findIndex((item: IPrayer) => !item.passed);
//     if (store.nextPrayerIndex === -1) return;

//     store.prayers[store.nextPrayerIndex].isNext = true;
//     setTimer();
//   };
// }

// export default PrayerTimeController;
