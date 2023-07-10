import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import strip from '@rollup/plugin-strip'
import terser from '@rollup/plugin-terser'
import copy from 'rollup-plugin-copy'

const baseConfig = {
  input: {
    NIM: 'src/nim/index.ts',
    V2NIMMessageService: 'src/services/V2NIMMessageService/index.ts',
    V2NIMSessionService: 'src/services/V2NIMSessionService/index.ts'
  },
  output: {
    dir: 'dist/esm',
    format: 'es',
    exports: 'named'
  },
  plugins: [
    // 处理外部依赖
    resolve(),
    // 支持基于 CommonJS 模块引入
    commonjs(),
    // 支持 typescript，并导出声明文件
    typescript(),
    // 清除调试代码
    process.env.BUILD_ENV === 'test'
      ? false
      : strip({
          include: ['**/*.(js|ts)']
        }),
    process.env.BUILD_ENV === 'test' ? false : terser(),
    copy({
      targets: [
        { src: './dist/types/src/typings/**/*', dest: './dist/NIM.umd/' },
        // 小程序导出 TS 是因为可能有人用 taro 环境，需要 ts 支持
        { src: './dist/types/src/typings/**/*', dest: './dist/esm/types/' }
      ]
    })
  ],
  external: ['lodash-es', 'eventemitter3']
}

export default baseConfig
