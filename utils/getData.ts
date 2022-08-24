//
//
//
//
//
// TODO
import { IApi } from "~~/api/LondonPrayerTimesApi/interfaces";
import getPrayerTimes from "./getPrayerTimes";
import setCache from "./setCache";

export default async (url: string): Promise<IApi> => {
  const cache = localStorage.getItem("data");

  if (!cache) {
    console.log("no cache found");

    // get prayers times and set new cache cache
    const prayers = await getPrayerTimes(url);
    setCache("data", { updatedAt: new Date(), prayers });

    return prayers;
  }

  const data = JSON.parse(cache);

  // prepare date check
  const today = new Date().getDate();
  const updatedAt = new Date(data.updatedAt).getDate();

  if (today === updatedAt) {
    console.log("compared dates", { updatedAt, today });
    console.log("valid cache for today", { data });
    return data.prayers;
  }

  console.log("outdated cache", { data });

  // cache outdated. set new cache
  const prayers = await getPrayerTimes(url);
  setCache("data", { updatedAt: new Date(), prayers });

  return prayers;
};
