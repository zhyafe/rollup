module.exports = {
  input: "./index.js",
  output: {
    // dir: "dist",
    file: "z-bundle.js",
    format: "cjs",
  },
  plugins: [
    {
      name: "zz",
      resolveId(...args) {
        console.log("resolve", args);
        if (args[0] == "./add") {
          console.log("----------index");
          return null
        }
        // return "b.js";
      },
      load(...args) {
        console.log("load", args);
        // return "aabb";
      },
    },
  ],
};
