import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

module.exports = {
  input: "src/index.ts",
  output: {
    // file: "dist/bundle.js",/
    format: "cjs",
    exports: "named",
    dir: "dist",
  },

  plugins: [
    commonjs(),
    resolve(),
    typescript(), //支持ts
  ],
};
