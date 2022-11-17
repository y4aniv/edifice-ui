// See https://rollupjs.org/guide/en/#configuration-files

import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { terser } from 'rollup-plugin-terser';

export default [{
  input: 'transpiled/esm/ts/index.js',
  output: {
    file: 'dist/ode-ts-client.mjs',
    format: 'es',
    sourcemap: true,
    minifyInternalExports: true
  },
  plugins: [
    commonjs(),
    nodeResolve({
      browser: true
    }),
    json({
      compact: true
    }),
    terser()
  ]
}, {
  input: 'transpiled/cjs/ts/index.cjs.js',
  output: {
    file: 'dist/ode-ts-client.js',
    format: 'cjs',
//    format: 'umd', name: "odeTsClient",
    sourcemap: true,
    minifyInternalExports: true
  },
  plugins: [
    commonjs(),
    nodePolyfills(),
    nodeResolve({}),
    json({
      compact: true
    }),
    terser()
  ]
}];