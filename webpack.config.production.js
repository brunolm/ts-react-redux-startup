const webpack = require('webpack');
const pack = require('./webpack.config.js');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

pack.plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true, compress: true }));

pack.plugins.push(
  new OptimizeCssAssetsPlugin({
    cssProcessorOptions: { discardComments: { removeAll: true } }
  })
);

module.exports = pack;
