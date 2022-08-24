import { IApi } from "~~/api/LondonPrayerTimesApi/interfaces";

export default async (url: string): Promise<IApi> => {
  const response: Response = await fetch(ur!l);
  return response.json();
};
