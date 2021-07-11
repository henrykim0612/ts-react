import path from 'path';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { Configuration } from 'webpack';

const config: Configuration = {
  name: 'mine-sweeper-dev',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
  entry: {
    app: './client',
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: path.join(__dirname, 'node_modules'),
      use: {
        loader: 'babel-loader',
        options: {
          plugins: ['react-refresh/babel'],
          presets: [[
            '@babel/preset-env',
            {
              targets: '> 0.25%, not dead',
              useBuiltIns: 'usage',
              corejs: { version: '3.15.2', proposals: true },
            },
          ], '@babel/preset-react', '@babel/preset-typescript'],
        },
      },
    }],
  },
  plugins: [
    new ReactRefreshPlugin(),
    new ForkTsCheckerWebpackPlugin(),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist',
  },
  devServer: {
    publicPath: '/dist/',
    hot: true,
  },
};
export default config;
