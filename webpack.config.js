// import * as webpack from 'webpack';
// import * as path from 'path';

const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const pack: webpack.Configuration = {
const pack = {
  context: __dirname,
  entry: {
    app: ['babel-polyfill', './src/'],
  },
  output: {
    path: path.resolve('./dist'),
    publicPath: '/static',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader!ts-loader',
        include: /src|spec/,
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader!postcss-loader' }),
        include: /src/,
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          require('precss'),
          require('autoprefixer'),
        ],
      },
    }),
    new ExtractTextPlugin({ filename: 'app.css', disable: false, allChunks: true }),
  ],
};

module.exports = pack;
