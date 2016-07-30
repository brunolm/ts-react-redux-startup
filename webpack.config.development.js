const webpack = require('webpack');
const pack = require('./webpack.config.js');

pack.devtool = 'source-map';

module.exports = pack;
