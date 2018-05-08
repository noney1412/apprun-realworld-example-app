const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  context: path.join(__dirname, "./src"),
  plugins: [
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: "index.html",
      template: "public/index.html"
    })
  ],
  entry: {
    app: "./main.ts"
  },
  output: {
    filename: "[name].js"
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { test: /.tsx?$/, loader: "ts-loader" },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  },
  devtool: "source-map",
  devServer: {}
};
