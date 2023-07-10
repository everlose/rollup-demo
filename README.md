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
