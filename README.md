[![Build Status](https://travis-ci.org/wangbing0417/mDesign.svg?branch=master)](https://travis-ci.org/wangbing0417/mDesign)

# mDesign

开发个人组件库，方便工作使用

```js
karma 是一个测试运行器，它可以唤起浏览器，加载测试脚本，然后运行测试用例
mocha 是一个单元测试框架/库，可以用来写测试用例 提供describe it
sinon 是一个spy/stub/mock库，用来辅助测试

1. 安装各种工具
npm i -D karma karma-chrome-launcher karma-mocha karma-sinon-chai mocha sinon sinon-chai karma-chai karma-chai-spies

2. 创建karma配置

```

使用 travis ci 做持续集成

发布到 npmjs 官网

```js
注册 npmjs 个人账号
parcel build index.js --no-minify --no-cache
npm publish

使用者只需要安装就行 npm i mdesign

目前使用的时候注意样式和 icon 的引入问题

```

1. 添加 css 样式

使用本框架前，请在 css 中开启 border-box

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

IE8 及以上的浏览器都支持此样式
你还需要设置默认颜色等变量（后续会改为 SCSS 变量）

```css
html {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: #fff;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #999;
  --border-color: #999;
  --border-color-hover: #666;
}
```

2. 安装 mdesign

```js
npm i mdesign -S
```

3. 引入 mdesign

```js
import { Button, ButtonGroup, Icon } from 'mdesign'
import 'mdesign/dist/index.css'

export default {
  name: 'app',
  components: {
    'm-button': Button,
    'm-icon': Icon
  }
}
```

4. 引入 svg symbols

```html
<script src="//at.alicdn.com/t/font_1902018_m3j45t4o4j.js"></script>
```
