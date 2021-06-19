import path from "path";

module.exports = {
  input: path.join(__dirname, "./index.js"),
  output: {
    // file: "dist/bundle.js",/
    format: "cjs",
    exports: "named",
    dir: path.join(__dirname, "./dist"),
  },
};
