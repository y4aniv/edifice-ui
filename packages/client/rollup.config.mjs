// See https://rollupjs.org/guide/en/#configuration-files

import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { terser } from 'rollup-plugin-terser';

const outputFormats = process.env.format==='es' ? ['es'] : (process.env.format==='cjs') ? ['cjs'] : ['es', 'cjs'];
const outputDir = process.env.build_target ? process.env.build_target : 'dist';

export default outputFormats.map( format => {
  const plugins = [];
  if( process.env.watch ) {
    plugins.push( typescript({tsconfig:`./tsconfig.${format}.json`}) );
  }
  if( format==='es' ) {
    plugins.push( commonjs(), nodeResolve({browser: true}), json({compact: true}), terser() );
  } else {
    plugins.push( commonjs(), nodePolyfills(), nodeResolve(), json({compact: true}), terser() );
  }

  return {
    input: `transpiled/${format}/ts/index.js`,
    output: {
      file: outputDir+"/"+ (format==='es' ? "ode-ts-client.mjs" : "ode-ts-client.js"),
      format: format,
      sourcemap: true,
      minifyInternalExports: true
    },
    plugins: plugins
  }
});
