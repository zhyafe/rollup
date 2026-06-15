import path from "path";
console.log("---------", __dirname);

export default {
  input: path.join(__dirname, "./index.js"),
  output: {
    file: path.join(__dirname, "./dist/cjs/index.js"),
    format: "cjs",
    // exports:'named',
  },
};
