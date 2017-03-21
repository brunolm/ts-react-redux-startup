const webpack = require('webpack');
const path = require('path');
const isDevelopment = process.env.NODE_ENV === 'development';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('app.css');

const merge = require('extendify')({ isDeep: true, arrays: 'concat' });

module.exports = merge({
  context: __dirname,
  entry: {
    app: (isDevelopment ? ['webpack-hot-middleware/client'] : []).concat(['./src/']),
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
        loader: 'babel-loader!awesome-typescript-loader?forkChecker=true',
        include: /src|spec/,
      },
      {
        test: /\.s?css$/,
        loader: extractCSS.extract(['css-loader?minimize', 'sass-loader']),
        include: /src/,
      },
    ],
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./dist/vendor-manifest.json'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(process.env.NODE_ENV),
      },
    }),
    extractCSS,
  ],
}, isDevelopment ? require('./webpack.config.development') : require('./webpack.config.production'));
