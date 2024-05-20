生成多种模块格式代码； vue 的模块构建工具

输出推荐：
es 模块输出：对应 es 的导入
umd 模块数据：适配 cjs，amd, iife 导入

```json
<!-- package.json -->
{
  "main": "dist/bundle.umd.js",
  "module": "dist/bundle.es.js"
}
```
