const commonPaths = require("./common-paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CircularDependencyPlugin = require("circular-dependency-plugin");
const webpack = require("webpack");

const port = process.env.PORT || 8089;

const config = {
  mode: "development",
  entry: {
    app: `${commonPaths.appEntry}/index.js`
  },
  output: {
    filename: "[name].[hash].js"
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/, // exclude node_modules
      failOnError: false // show a warning when there is a circular dependency
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico",
      filename: "index.html",
      inject: true
    })
  ],
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    hot: true,
    open: true
  }
};

module.exports = config;
