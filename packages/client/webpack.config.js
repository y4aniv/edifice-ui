const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    "ode-ts-client.js": "./src/ts/index.ts",
    "ode-ts-client.mjs": {
      import: "./src/ts/index.ts",
			library: {
				type: 'module'
			},
    },
    "ode-ts-client.cjs": {
      import: "./src/ts/index.ts",
			library: {
				type: 'commonjs2'
			},
    },
  },
  experiments: {
    outputModule: true,
  },
  output: {
    filename: "[name]",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "source-map",
  resolve: {
    // Resolvable extensions.
    extensions: [".ts", ".tsx", ".js"],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  module: {
    rules: [
      // ts-loader will handle files with `.ts` or `.tsx` extensions
      { test: /\.tsx?$/, loader: "ts-loader" },
    ],
  },
};
