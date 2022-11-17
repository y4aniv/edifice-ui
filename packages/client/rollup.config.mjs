// See https://rollupjs.org/guide/en/#configuration-files

import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { terser } from 'rollup-plugin-terser';

const isWatching = process.env.watch=='true';
const outputFormats = isWatching ? ['es'] : ['es', 'cjs'];
const outputDir = process.env.build_target ? process.env.build_target : 'dist';

//console.log( "////////////////"+JSON.stringify(process.env) );

export default outputFormats.map( format => {
  const input = isWatching ? "src/ts/index.ts" : `transpiled/${format}/ts/index.js`;
  const plugins = [];
  if( isWatching ) {
    const tsConfig = {
      tsconfig:`./tsconfig.${format}.json`
    };
    plugins.push( typescript(tsConfig) );
  }
  if( format==='es' ) {
    plugins.push( commonjs({extensions:['.js','.ts']}), nodeResolve({browser: true}), json({compact: true}), terser() );
  } else {
    plugins.push( commonjs({extensions:['.js','.ts']}), nodePolyfills(), nodeResolve(), json({compact: true}), terser() );
  }

  return {
    input: input,
    output: {
      file: outputDir+"/"+ (format==='es' ? "ode-ts-client.mjs" : "ode-ts-client.js"),
      format: format,
      sourcemap: true,
      minifyInternalExports: true
    },
    plugins: plugins
  }
});
