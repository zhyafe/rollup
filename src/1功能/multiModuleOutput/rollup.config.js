import path from "path";

// amd – 异步模块定义，用于像RequireJS这样的模块加载器
// cjs – CommonJS，适用于 Node 和 Browserify/Webpack
// esm – 将软件包保存为 ES 模块文件，在现代浏览器中可以通过 <script type=module> 标签引入
// iife – 一个自动执行的功能，适合作为<script>标签。（如果要为应用程序创建一个捆绑包，您可能想要使用它，因为它会使文件大小变小。）
// umd – 通用模块定义，以amd，cjs 和 iife 为一体
// system - SystemJS 加载器格式

module.exports = {
  input: path.join(__dirname, "./index.js"),
  output: [
    {
      format: "cjs",
      exports: "named",
      file: path.join(__dirname, "./dist/cjs/index.js"),
    },
    {
      format: "amd",
      exports: "named",
      file: path.join(__dirname, "./dist/amd/index.js"),
    },
    {
      format: "iife",
      name: "iifeName",
      exports: "named",
      file: path.join(__dirname, "./dist/iife/index.js"),
    },
    {
      format: "umd",
      name: "umdName",
      exports: "named",
      file: path.join(__dirname, "./dist/umd/index.js"),
    },
    {
      format: "system",
      exports: "named",
      file: path.join(__dirname, "./dist/system/index.js"),
    },
  ],
};
