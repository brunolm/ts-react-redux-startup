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

app.use((req, res) => {
  const model = {
    path: `${req.path}`.replace(/\/$/, ''),
  };
  res.render('index.cshtml', model);
});

const server = app.listen(+process.env.VIRTUAL_PORT || 3000, '0.0.0.0', function () {
  console.log();
  console.log(`Listening at 0.0.0.0:${server.address().port}`);
  console.log(`Virtual url http://${process.env.VIRTUAL_HOST || 'localhost'}`);
  console.log();
});
