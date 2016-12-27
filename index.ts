import * as app from './app';

app.use('/api', require('./src/api'));

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
