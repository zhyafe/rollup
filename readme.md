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
