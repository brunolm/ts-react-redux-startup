const path = require('path');
const vash = require('vash');
const express = require('express');
const favicon = require('serve-favicon');
const compression = require('compression');
const app = express();

app.use(compression());

app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use('/static', express.static(path.join(__dirname, 'dist')));

app.set('view engine', 'vash');
app.set('views', path.join(__dirname, 'views'));
app.engine('cshtml', vash.renderFile);

module.exports = app;
