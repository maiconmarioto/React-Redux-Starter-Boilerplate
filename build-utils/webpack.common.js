const commonPaths = require("./common-paths");
const OfflinePlugin = require("offline-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const config = {
  entry: {
    js: ["babel-polyfill"],
    vendor: ["@material-ui/core"]
  },
  output: {
    path: commonPaths.outputPath,
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: "vendor",
          name: "vendor",
          enforce: true
        }
      }
    }
  },
  plugins: [
    new OfflinePlugin({
      excludes: ["**/*.map"],
      updateStrategy: "changed",
      autoUpdate: 1000 * 60 * 2,
      externals: [
        "public/favicon.ico",
        "https://fonts.googleapis.com/css?family=Roboto",
        "https://fonts.googleapis.com/icon?family=Material+Icons"
      ]
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico"
    })
  ]
};

module.exports = config;

//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "public/index.html",
//       favicon: "public/favicon.ico"
//     })
//   ]
// };

// module.exports = config;
