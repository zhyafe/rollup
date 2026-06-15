### pak.module 字段

指定的文件模块应当使用 es 的模块; 提供给 rollup 或 webpack 打包使用; 进行 treeShaking

- 当 rollup 引入 node_modules 中的模块时
  1. 如果有 pak.module 会优先使用此入口
  2. 如果没有 pak.module 会使用 main 作为入口
