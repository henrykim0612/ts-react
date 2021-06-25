const path = require('path');
const webpack = require('webpack');

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
      loader: 'awesome-typescript-loader', // .tsx 파일은 awesome-typescript-loader 로 변환하겠다
    }]
  },
  plugins: [

  ],
  output: {
    filename: '[name].js', // entry app.js 로 만들어짐
    path: path.join(__dirname, 'dist'),
  }
}


