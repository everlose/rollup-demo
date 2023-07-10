import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import strip from '@rollup/plugin-strip'
import terser from '@rollup/plugin-terser'
import babel from '@rollup/plugin-babel'

export default {
  input: 'src/entry/index.ts',
  output: {
    file: 'dist/NIM.umd.js',
    format: 'umd',
    name: 'NIM'
    // exports: 'named',
    // preserveModules: true, // 保留模块结构
    // preserveModulesRoot: 'src' // 将保留的模块放在根级别的此路径下
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
    babel({
      include: ['src/**/*'],
      extensions: ['.ts', '.js', 'json'],
      babelHelpers: 'runtime' // how those babel helpers are inserted into the code
    }),
    process.env.BUILD_ENV === 'test' ? false : terser()
  ]
}
