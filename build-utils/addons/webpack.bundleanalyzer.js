const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const WebpackMonitor = require("webpack-monitor");

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "server"
    }),
    new WebpackMonitor({
      capture: true, // -> default 'true'
      target: "../monitor/myStatsStore.json", // default -> '../monitor/stats.json'
      launch: true, // -> default 'false'
      port: 3030, // default -> 8081
      excludeSourceMaps: true // default 'true'
    })
  ]
};
