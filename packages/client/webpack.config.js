const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    'ode-ts-client': './dist/src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'bundle'),
  },
  devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
        extractComments: false,
    })],
  },
};
