import convertTime from "convert-time";

export const convert12To24hr = (name: string, time: string): string => {
  const isValidTime: boolean = validateTime(time);
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

export const convert24hrToMillisecond = (time: string): number => {
  const isValidTime: boolean = validateTime(time);
  if (!isValidTime) throw { error: true, message: "Invalid time" };

  const [hour, minute] = time.split(":");

  const now = new Date();
  now.setHours(+hour);
  now.setMinutes(+minute);
  now.setSeconds(0);

  return now.getTime();
};

export const timeLeft = (time: number): number => {
  const now = new Date().getTime();
  return time - now;
};

export const validateTime = (time: string): boolean => {
  const militaryTimeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

  if (typeof time !== "string") return false;
  else if (!time.match(militaryTimeRegex)) return false;
  else return true;
};
