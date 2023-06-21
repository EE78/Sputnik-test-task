const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const resolve = require("path").resolve;
const path = require("path");

const plugins = [
  new HtmlWebpackPlugin({
    filename: "index.html",
    template: resolve(__dirname, "public/index.html"),
  }),
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
];

module.exports = {
  plugins,
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].[hash].js",
    path: resolve(__dirname, "dist"),
    publicPath: "",
  },

  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "/"),
    },
    port: 8081,
    open: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
