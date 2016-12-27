const webpack = require('webpack');
const pack = require('./webpack.config.js');

console.log('using webpack.config.development');

pack.devtool = 'source-map';

pack.entry.app.unshift('webpack-hot-middleware/client');

pack.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
pack.plugins.push(new webpack.HotModuleReplacementPlugin());
pack.plugins.push(new webpack.DefinePlugin({
  '__DEVTOOLS__': true,
  'process.env.NODE_ENV': JSON.stringify('development'),
}));

module.exports = pack;
