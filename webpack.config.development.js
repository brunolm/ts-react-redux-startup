const webpack = require('webpack');
const pack = require('./webpack.config.js');

console.log('using webpack.config.development');

module.exports = {
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
