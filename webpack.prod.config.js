const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 为了保持module.id的稳定，该插件将导致哈希基于模块的相对路径，生成一个四个字符串作为模块ID。建议用于生产中
    new webpack.HashedModuleIdsPlugin({
      hashFunction: "sha256",
      hashDigest: "hex",
      hashDigestLength: 20
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require("./vendor-manifest.json")
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html")
    })
  ],
  devServer: {
    // hot: true,
    contentBase: path.join(__dirname, "./dist"),
    host: "0.0.0.0", // 可以使用手机访问
    port: 8080,
    historyApiFallback: true // 该选项的作用所有的404都连接到index.html
  }
};
