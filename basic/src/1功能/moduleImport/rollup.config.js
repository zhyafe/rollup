import path from "path";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

module.exports = {
  input: path.join(__dirname, "./index.js"),
  output: {
    file: path.join(__dirname, "./dist/cjs/index.js"),
    format: "cjs",
    exports: "named",
  },
  plugins: [commonjs(), resolve()],
};
