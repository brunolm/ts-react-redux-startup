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
    publicPath: '/static/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.tsx'],
  },
  postcss: function () {
    return [require('precss'), require('autoprefixer')];
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'babel!ts',
        include: /src|spec/,
      },
      {
        test: /\.s?css$/,
        loader: 'style!css!postcss',
        include: /src/,
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'app.css', disable: false, allChunks: true }),
  ],
};

module.exports = pack;
