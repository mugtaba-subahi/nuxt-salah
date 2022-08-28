// Modules
export interface PrayerItem {
  english: string;
  time: string;
  arabic: string;
  passed: boolean;
  isNext: boolean;
  index: number;
}

export interface CountDownProps {
  nextPrayer: PrayerItemNullable;
  timeLeft: string;
}

// Types
export type PrayerItemNullable = PrayerItem | null;
