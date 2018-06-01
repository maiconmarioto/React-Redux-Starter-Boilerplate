const commonPaths = require("./common-paths");
const OfflinePlugin = require("offline-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const PreloadWebpackPlugin = require("preload-webpack-plugin");
const webpack = require("webpack");

const config = {
  entry: {
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
    new ManifestPlugin(),
    new OfflinePlugin({
      relativePaths: false,
      publicPath: "/",
      excludes: ["**/*.map"],
      updateStrategy: "changed",
      autoUpdate: 1000 * 60 * 2,
      caches: {
        main: [":rest:"],
        additional: ["**/*.js"]
      },
      safeToUseOptionalCaches: true,
      AppCache: false,
      externals: [
        "public/favicon.ico",
        "https://fonts.googleapis.com/css?family=Roboto",
        "https://fonts.googleapis.com/icon?family=Material+Icons"
      ]
    })
  ]
};

module.exports = config;
