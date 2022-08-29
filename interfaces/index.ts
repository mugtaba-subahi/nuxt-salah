export interface GetPrayersApiResponse {
  city: string;
  date: string;
  fajr: string;
  fajr_jamat: string;
  sunrise: string;
  dhuhr: string;
  dhuhr_jamat: string;
  asr: string;
  asr_2: string;
  asr_jamat: string;
  magrib: string;
  magrib_jamat: string;
  isha: string;
  isha_jamat: string;
}

export interface PrayerItem {
  english: string;
  time: string;
  arabic: string;
  passed: boolean;
  isNext: boolean;
  index: number;
}

export interface CountDown {
  nextPrayer: PrayerItemNullable;
  timeLeft: string;
}

export type PrayerItemNullable = PrayerItem | null;
