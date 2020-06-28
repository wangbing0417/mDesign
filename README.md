[![Build Status](https://travis-ci.org/wangbing0417/mDesign.svg?branch=master)](https://travis-ci.org/wangbing0417/mDesign)

# mDesign

开发个人组件库，方便工作使用

## 安装

使用本框架前，请在 css 中开启 border-box

```css
* {
  box-sizing: border-box;
}
```

```js
karma 是一个测试运行器，它可以唤起浏览器，加载测试脚本，然后运行测试用例
mocha 是一个单元测试框架/库，可以用来写测试用例
sinon 是一个spy/stub/mock库，用来辅助测试

1. 安装各种工具
npm i -D karma karma-chrome-launcher karma-mocha karma-sinon-chai mocha sinon sinon-chai karma-chai karma-chai-spies

2. 创建karma配置

```

发布到 npmjs 官网

```js
注册 npmjs 个人账号
parcel build index.js --no-minify --no-cache
npm publish

使用者只需要安装就行 npm i mdesign

目前使用的时候注意样式和 icon 的引入问题

```
