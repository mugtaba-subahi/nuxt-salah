export interface IPrayer {
  time: string;
  passed: boolean;
  english: string;
  arabic: string;
  isNext: boolean;
  index: number;
}

export type IPrayerNullable = IPrayer | null;
