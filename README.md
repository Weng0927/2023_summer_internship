# Web前端图编辑引擎调研项目

针对`antv/x6`、`maxGraph`、`konva.js`这些图形引擎，测试其与`next.js`项目的兼容性与运行性能。

## 项目运行方式

1. 安装好Node.js，本项目创建时，使用的Node.js版本号为`v18.16.0`。

2. 终端运行如下命令

```bash
npm install
npm run dev
```

3. 打开浏览器，访问http://localhost:3000/。

## 页面说明

顶部导航栏可跳转至相应的测试页面。

目前: `antv/x6`与`konva.js`都已通过数据的序列化与反序列化引入万级数据，`maxGraph`目前仅初步导入。
