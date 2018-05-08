const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/main.tsx'
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: 'index.html',
      template: 'public/index.html'
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname + '/dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{ test: /.tsx?$/, loader: 'ts-loader' }]
  },
  devServer: {
    open: true
  },
  devtool: 'source-map'
};
