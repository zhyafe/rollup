import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
module.exports = {
  input: "src/index.js",
  output: [
    {
      file: "dist/cjs/bundle.js",
      format: "cjs",
      // Entry module "src\index.js" is implicitly using "default" export mode, which means for CommonJS output that its default export is assigned to "module.exports". For many tools, such CommonJS output will not be interchangeable with the original ES module. If this is intended, explicitly set "output.exports" to either "auto" or "default", otherwise you might want to consider changing the signature of "src\index.js" to use named exports only.
      // 输入模块“SRC \ index.js”隐式使用“默认”导出模式，这意味着CommonJS输出将其默认导出分配给“Module.Exports”。 对于许多工具，这种CommonJS输出不会与原始ES模块互换。 如果这是预期的，显式将“Output.Exports”明确设置为“auto”或“默认值”，否则您可能希望考虑更改“src \ index.js”的签名以使用命名导出。
      exports: "named",
      // 取值 default, named 。 决定cjs模块导出是怎样的。
      //default：以module.exports= 导出，如果源码是用 exprot default {} 的可以使用这个值。
      // named: 以 exports.name= 导出， 如果源码中是用 export 导出的可以使用这个，如果源码使用 export default{}，导出的是 exports.default=
    },
    {
      file: "dist/umd/bundle.js",
      format: "umd", // cjs, amd, iife 为一体
      name: "iifeNameUse", // iife需要使用
    },
    {
      file: "dist/iife/bundle.js",
      format: "iife",
      name: "iifeName", // iife 需要name, name是注入到全局变量的， window.iifeName =
    },
    {
      file: "dist/amd/bundle.js",
      format: "amd",
    },
    {
      file: "dist/amd/bundle.js",
      format: "amd",
    },
  ],
  plugins: [commonjs(), resolve()],
  external: ["lodash"], // 是否将该模块打包进bundle, 如果在数组内，不打包进bundle
};
