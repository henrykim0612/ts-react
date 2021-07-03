const path = require('path');
// import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
// import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

module.exports = {
  mode: 'development', // or 'production' or 'none'
  devtool: 'eval', // production -> 'hidden-source-map'
  // 시작점
  entry: './index.js',
  // 규칙
  module: {
    rules: [{
      test: /\.js$/,
      exclude: path.join(__dirname, 'node_modules'),
      use: {
        loader: 'babel-loader',
        options: {
          presets: [[
            '@babel/preset-env',
            {
              targets: "> 0.25%, not dead",
              useBuiltIns: "usage",
              corejs: { version: "3.15.2", proposals: true }
            }
          ]],
        }
      },
    }],
  },
  plugins: [
    // new ReactRefreshPlugin(),
    // new ForkTsCheckerWebpackPlugin(),
  ],
  // 출력
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
}