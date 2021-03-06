import * as compression from 'compression';
import * as express from 'express';
import * as favicon from 'serve-favicon';
import * as path from 'path';
import * as webpack from 'webpack';

const vash = require('vash');

const webpackConfig = require('./webpack.config');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(webpackConfig);

  console.log('Using dev-middleware');

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    stats: {
      colors: true,
    },
    watchOptions: {
      poll: 300, // docker support
    },
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
