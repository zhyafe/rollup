## rollup

- 支持 es 模块
- 支持 treeShaking
- 可输出多种模块格式代码

> 适用于库的打包

### 基本使用

配置三个参数

1. 添加配置文件 rollup.config.js
2. 配置文件入口和生成代码目录 配置项 入口，出口，格式：

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

### 兼容 commonjs

rollup 默认不支持 commonjs，但是可以通过配置插件来支持；

模块解析插件： @rollup/plugin-node-resolve
模块转换插件：@rollup/plugin-commonjs

```js
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
{
  plugins: [commonjs()，resolve()],
}
```

以 dayjs 为例：配置上述执行打包后，bundle 里面就会有使用到的库代码了

### 支持 ts

配置`@rollup/plugin-typescript`支持 ts

```js
import typescript from "@rollup/plugin-typescript";
{
  plugins: [typescript()],
}
```

注：支持 ts 配置再 output 配置中使用 dir, 否则不会生成 d.ts 文件

### 输出模块根据使用场景确定：

1. 如果是在 nodejs 中使用，则使用 commonjs 模块
   plugins: [resolve({ browser: true })] 插件中需要配置 browser: true(如果不设置 true,项目中有 import path from 'path';那么会直接输出到 bundle 中浏览器执行不了) 才能支持浏览器使用
2. 如果是在浏览器中使用，则使用 umd 模块
   import autoExternal from "rollup-plugin-auto-external"; 使用此插件 autoExternal() 自动提取三方库(三方库不会进行打包，导入的代码会直接输出到 bundle 中)，
3. 如果是在其他项目或库中使用，则使用 es 模块
   import autoExternal from "rollup-plugin-auto-external"; 使用此插件 autoExternal() 自动提取三方库(三方库不会进行打包，导入的代码会直接输出到 bundle 中)，
