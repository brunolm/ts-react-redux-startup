const webpack = require('webpack');
const pack = require('./webpack.config.js');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  plugins: [
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: { discardComments: { removeAll: true } }
    }),
    new webpack.optimize.UglifyJsPlugin({ minimize: true, compress: true }),
  ],
};


