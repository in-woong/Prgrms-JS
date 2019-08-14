import * as config from "./config.js";
import * as types from "./types.js";

export const $ = target => document.querySelector(target);

export const thrower = message => {
  throw new Error(config[types[message]]);
};
