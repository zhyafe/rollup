## 基本使用

1. 添加配置文件 rollup.config.js

2. 配置文件入口和生成代码目录 配置项：

```js
{
  input: path.join(__dirname, "./index.js"),
  output: {
    format: "cjs",
    exports: "named",
    dir: path.join(__dirname, "./dist"),
  },
}
```

3. 执行 rollup 命令生成代码
