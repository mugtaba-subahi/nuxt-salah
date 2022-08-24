abstract class Api {
  abstract fetchPrayerTimes(): Promise<unknown>;
}

export default Api;
