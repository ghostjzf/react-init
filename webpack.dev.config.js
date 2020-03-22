const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TestPlugin = require("./plugins/Test");

module.exports = {
  mode: "development",
  entry: {
    vendor: ["react", "react-dom", "react-router-dom"],
    app: "./src/index.js"
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" },
          {
            loader: path.resolve(__dirname, "loaders/test-loader.js")
          }
        ]
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new TestPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html")
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    port: 8080,
    progress: true,
    historyApiFallback: true // 该选项的作用所有的404都连接到index.html
  }
};
