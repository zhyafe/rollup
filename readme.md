## 使用

### 添加配置文件

```js
// 三个参数必须配置：input,output.file,output.format
module.exports = {
  input: "src/index.js", //入口
  output: {
    file: "dist/bundle.js", //输出文件
    format: "cjs", //模块格式 cjs:commonjs
  },
};
```

### 执行命令

`rollup -c`

## 插件

### 支持导入 commonjs 模块

## rollup

- 支持 es 模块
- 支持 treeShaking
- 可输出多种模块格式代码

> 适用于库的打包

[基本使用](./esModule/doc.md)

```js
import commonjs from "@rollup/plugin-commonjs";
{
  plugins: [commonjs()],
}
```

### 支持从 node_modules 中导入模块 打包进 bundle

```js
import resolve from "@rollup/plugin-node-resolve";
{
  plugins: [resolve()],
}
```
