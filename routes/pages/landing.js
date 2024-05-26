const express = require('express');
const router  = express();

router.get("/", (req, res) => {
  res.send('UPSWING Server.');
});

module.exports = router;
