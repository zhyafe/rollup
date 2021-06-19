import path from "path";

module.exports = {
  input: path.join(__dirname, "./index.js"),
  output: {
    file: path.join(__dirname, "./dist/cjs/index.js"),
    format: "cjs",
    exports: "named",
  },
};
