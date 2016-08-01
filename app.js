const path = require('path');
const vash = require('vash');
const express = require('express');
const favicon = require('serve-favicon');
const compression = require('compression');
const webpack = require('webpack');

const webpackConfig = require('./webpack.config.development');

const app = express();

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig);

  console.log('Using dev-middleware');

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: false,
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true
    }
  }));
}

app.use(compression());

app.use(favicon(path.join(__dirname, 'favicon.ico')));

app.use('/static', express.static(path.join(__dirname, 'dist')));

app.set('view engine', 'vash');
app.set('views', path.join(__dirname, 'views'));
app.engine('cshtml', vash.renderFile);

module.exports = app;
