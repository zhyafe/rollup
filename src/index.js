import addUtil from "./utils/util1.js";
let count = addUtil.add(1, 2);
console.log("count", count);
import cjs from "./cjs/cjs1.js";
console.log("cjs", cjs);

export default {
  subtract: (a, b) => {
    return a - b;
  },
  add: (a, b) => {
    return a + b;
  },
};
