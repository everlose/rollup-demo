搭建一个库，使用 rollup 打包，导出成 umd 和 esm 两种格式， esm 一步一步实现按需加载。

要点如下:

1. 引入 rollup, 定好 input 和 output 输出.
2. 三方库引入 lodash-es, eventEmitter3. 因它们前者 commonJS 规范导出，后者是 ES 标准导出的模块. 引入兼容模块
    - @rollup/plugin-commonjs
    - @rollup/plugin-node-resolve
3. 支持 src 使用 ts 编写. 引入
    - typescript
    - tslib
    - @rollup/plugin-typescript
4. 支持 umd 导入和 esm 导入两种. esm 专供有按需引入的开发者. build 文件拆分为 rollup.config.esm.js 和 rollup.config.umd.mjs
5. umd 格式引入 babel 做解析使支持的环境更广, esm 则不需要. 引入模块
    - @rollup/plugin-babel
    - @babel/preset-env
    - @babel/plugin-transform-runtime
    - @babel/core
6. 支持测试打包和线上打包两种模式. 引入
    - cross-env
    - @rollup/plugin-terser
    - @rollup/plugin-strip
7. 调整产物包里的 TS 定义输出, 使开发者在编写代码时能得到足够的提示. 引入
    - rollup-plugin-copy
8. typedoc 输出文档。加入 typedoc.js 文件, 引入
    - typedoc
9. 单元测试. 加入 test 文件夹, 引入
    - jest
    - ts-jest
    - @types/jest

## babel 杂记

#### @babel/preset-env 

@babel/preset-env 会使用 @babel/core, ES6 新语法如箭头函数来自 @babel/core 支持

https://babeljs.io/docs/babel-preset-env

会根据 browserslist 库所表达要兼容的浏览器范围，来编译代码.

截止 2023 年 7 月 14 日, browserslist 表达的兼容范围见 [github browserslist](https://github.com/browserslist/browserslist#queries)

```
Browserslist will use defaults: > 0.5%, last 2 versions, Firefox ESR, not dead.
```

[browserslist 提供在线的查询条件练习网站](https://browsersl.ist/#q=%3E+0.5%25%2C+last+2+versions%2C+Firefox+ESR%2C+not+dead%2C+IE+%3E%3D+11)

#### @babel/plugin-transform-runtime

https://babeljs.io/docs/babel-plugin-transform-runtime

ES6 绝大多数新 API 如 Promise, Set, Map 等都是来自于 @babel/plugin-transform-runtime 里的 core-js 支持

另外的如果有 ES8 及以上的新 API, @babel/plugin-transform-runtime 会自动使用各种插件来支持。

如 async/await 语法， 会使用 babel-plugin-polyfill-regenerator 来支持。

截止 23 年 7 月 14 日，其默认配置是不使用 corejs，支持 async/await 的，见下文官网摘出来的默认配置

```
{
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "corejs": false,
        "helpers": true,
        "regenerator": true,
        "version": "7.0.0-beta.0"
      }
    ]
  ]
}
```