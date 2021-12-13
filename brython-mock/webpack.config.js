const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // 배포시에는 production
  devtool: 'eval', // 배포시에는 hidden-source-map
  resolve: {
    extensions: ['.jsx', '.js', '.ts', '.tsx'],
  },
  entry: {
    app: './client'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }, { // 2
      test: /\.html$/,
      use: [
        {
          loader: 'html-loader',
          options: {
            minimize: true,
          },
        },
      ],
    },]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    })
  ],
  output: {
    filename: '[name].js', // entry app.js 로 만들어짐
    path: path.join(__dirname, 'dist'),
  },
  // 개발 서버 설정
  devServer: {
    host: 'localhost',
    port: 8080,
    open: true, // open page when start
  },
}


