const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = env => ({
  mode: "development",
  entry: {
    'ode-ts-client': './src/ts/index.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, env.build_target),
  },
  // @see https://github.com/TypeStrong/ts-loader#devtool--sourcemaps
  devtool: "inline-source-map",
  resolve: {
    // Resolvable extensions.
    extensions: [".ts", ".tsx", ".js"]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
        extractComments: false,
    })],
  },
  module: {
    rules: [
      // ts-loader will handle files with `.ts` or `.tsx` extensions
      { test: /\.tsx?$/, loader: "ts-loader", type: 'javascript/auto' },
    ],
  },
});
