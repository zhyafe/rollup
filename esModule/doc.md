## 基本使用

1. 添加配置文件 rollup.config.js

2. 配置文件入口和生成代码目录 配置项：

```js
// 三个参数必须配置：input,output.file,output.format
{
  input: path.join(__dirname, "./index.js"),
  output: {
    format: "cjs",
    exports: "named",
    file: path.join(__dirname, "./dist/index.js"),
  },
}
```

3. 执行 rollup 命令生成代码
