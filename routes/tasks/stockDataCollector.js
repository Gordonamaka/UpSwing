const express = require("express");
const router = express.Router();
const { externalDataFetcher } = require("../../lib/externalDataFetcher");

router.post('/', (req, res) => {
  const ticker = 'AAPL';
  try {
    externalDataFetcher(ticker);
    res.send({message: "Data received by database!"});
  } catch (err) {
    console.log('Error Message', err)
  }
});

module.exports = router;
