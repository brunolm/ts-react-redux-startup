import * as express from 'express';
const router = express.Router();

router.get('/data', (req, res) => {
  res.send({ data: 1 });
});

module.exports = router;
