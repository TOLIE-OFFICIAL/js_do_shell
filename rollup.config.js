import commonjs from '@rollup/plugin-commonjs';
import json  from '@rollup/plugin-json'
import nodeResolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy'

export default {
  input: 'main.js',
  output: {
      // dir: 'dist',
      file: 'dist/bundle.cjs',
      format: 'cjs'
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    json(),
    terser(),
    copy({
      targets: [
        { src: 'scripts/netstat.sh', dest: 'dist/scripts' },
      ],
      verbose: true // 打印复制文件的信息
    })
  ]
};