const path = require('path');

module.exports = {
  mode: 'development', // 배포시에는 production
  devtool: 'eval', // 배포시에는 hidden-source-map
  resolve: {
    extensions: ['.jsx', '.js', '.ts', '.tsx'],
  },
  entry: {
    app: './index.tsx'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader', // .tsx 파일은 awesome-typescript-loader 로 변환하겠다
    }]
  },
  plugins: [],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
  devServer: {
    writeToDisk: true,
    filename: '[name].js',
    hot: true,
    port: 9000
  }
}
