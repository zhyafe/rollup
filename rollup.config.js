import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

module.exports = {
  input: "src/index.ts",
  output: [
    {
      file: "dist/cjs/bundle.js",
      format: "cjs",
      exports: "named",
    },
  ],
  plugins: [
    commonjs(),
    resolve(),
    typescript({
      declarationDir: "dist",
    }), //支持ts
  ],
};
