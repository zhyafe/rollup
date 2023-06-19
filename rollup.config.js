import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

module.exports = {
  input: "src/index.ts",
  output: {
    // file: "dist/bundle.js",/
    format: "cjs",
    /***
     * 这个参数可以不填，用默认的'auto'
     * 会根据你的输入文件的 export自动判断
     *  - 如果只有default export时，会使用'default'： 
     *    1.default会将输出的default内容放到commonjs模块的exports
     *    2.不会在exports中添加__esModule属性
     *  - 如果有 name export时，会使用'named'： 
     *    1.named会将输出named内容放到commonjs模块的exports；
     *    2.会在exports中添加属性__esModule = true
     *    3.如果有default输出，会放在export.default上
     */
    // exports: "named",   
    dir: "dist",
  },

  plugins: [
    commonjs(),
    resolve(),
    typescript(), //支持ts
  ],
};
