## rollup

- 支持 es 模块
- 支持 treeShaking
- 可输出多种模块格式代码

> 适用于库的打包

### 基本使用

配置三个参数

- 入口
- 出口
- 格式

  [基本使用](./esModule/doc.md)

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
