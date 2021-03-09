import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
module.exports = {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
    // Entry module "src\index.js" is implicitly using "default" export mode, which means for CommonJS output that its default export is assigned to "module.exports". For many tools, such CommonJS output will not be interchangeable with the original ES module. If this is intended, explicitly set "output.exports" to either "auto" or "default", otherwise you might want to consider changing the signature of "src\index.js" to use named exports only.
    // 输入模块“SRC \ index.js”隐式使用“默认”导出模式，这意味着CommonJS输出将其默认导出分配给“Module.Exports”。 对于许多工具，这种CommonJS输出不会与原始ES模块互换。 如果这是预期的，显式将“Output.Exports”明确设置为“auto”或“默认值”，否则您可能希望考虑更改“src \ index.js”的签名以使用命名导出。
    exports: "default",
  },
  plugins: [commonjs(), resolve()],
};
