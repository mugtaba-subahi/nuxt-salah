import { GetPrayersApiResponse } from "!interfaces";

const config = {
  key: "2a99f189-6e3b-4015-8fb8-ff277642561d",
  path: "times",
  format: "json",
  baseUrl: "https://www.londonprayertimes.com"
};

const urls = {
  getPrayersUrl: `${config.baseUrl}/api/${config.path}?format=${config.format}&key=${config.key}`
};

export const get = async (): Promise<GetPrayersApiResponse> => {
  const { data } = await useFetch<GetPrayersApiResponse>(urls.getPrayersUrl);
  return data.value;
};
