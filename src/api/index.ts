import * as express from 'express';
const router = express.Router();

const wait = (ms: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

router.get('/data', async (req, res) => {
  await wait(1500);
  res.send({ data: 1 });
});

module.exports = router;
