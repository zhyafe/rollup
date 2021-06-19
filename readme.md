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

### 多模块输出

通过修改配置文件让 rollup 输出多个模块代码；

output 配置可以是个数组，来进行多模块输出

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
