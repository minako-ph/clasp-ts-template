import { main } from "./main";

declare const global: {
  [x: string]: unknown;
};

global.main = main;
