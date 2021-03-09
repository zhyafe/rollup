import addUtil from "./utils/util1.js";
import cjs from "./cjs/cjs1.js";
import _ from "lodash";

let count = addUtil.add(1, 2);
console.log("count", count);

console.log("cjs", cjs);

console.log("_", _);

export default {
  subtract: (a, b) => {
    return a - b;
  },
  add: (a, b) => {
    return a + b;
  },
};
