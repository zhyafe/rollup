import path from "path";

import typescript from "@rollup/plugin-typescript";

module.exports = {
  input: path.join(__dirname, "./index.ts"),
  output: {
    dir: path.join(__dirname, "./dist"),
    format: "cjs",
    exports: "named",
  },
  plugins: [typescript()],
};
