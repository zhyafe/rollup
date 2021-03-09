import addUtil from "./utils/util1.js";

let count = addUtil.add(1, 2);
console.log("count", count);

export var demoData = "2323";

export default {
  subtract: (a, b) => {
    return a - b;
  },
  add: (a, b) => {
    return a + b;
  },
};
