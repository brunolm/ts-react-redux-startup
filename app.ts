import * as path from 'path';
import * as express from 'express';
import * as favicon from 'serve-favicon';
import * as compression from 'compression';

import * as webpack from 'webpack';
const vash = require('vash');

const webpackConfig = require('./webpack.config.development');

const app = express();

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig);

  console.log('Using dev-middleware');

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    stats: {
      colors: true
    }
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(compression());

app.use(favicon(path.join(__dirname, 'favicon.ico')));

app.use('/static', express.static(path.join(__dirname, 'dist')));

app.set('view engine', 'cshtml');
app.set('views', path.join(__dirname, 'views'));
app.engine('cshtml', vash.renderFile);

export = app;
