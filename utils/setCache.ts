//
//
//
//
//
// TODO

import { ICacheData } from "!interfaces";

export default (name: string, data: ICacheData): void => {
  localStorage.setItem(name, JSON.stringify(data));
  console.log("new cache set", { data });
};
