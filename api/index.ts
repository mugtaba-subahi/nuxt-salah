export interface IGetPrayersApiResponse {
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

const config = {
  key: "2a99f189-6e3b-4015-8fb8-ff277642561d",
  path: "times",
  format: "json",
  baseUrl: "https://www.londonprayertimes.com"
};

const urls = {
  getPrayersUrl: `${config.baseUrl}/api/${config.path}?format=${config.format}&key=${config.key}`
};

export const get = async (): Promise<IGetPrayersApiResponse> => {
  const { data } = await useFetch<IGetPrayersApiResponse>(urls.getPrayersUrl);
  return data.value;
};
