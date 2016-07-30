const webpack = require('webpack');
const pack = require('./webpack.config.js');

// import * as webpack from 'webpack';

pack.plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true, compress: true }));
// pack.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }));

module.exports = pack;
