const express = require("express");
const router = express.Router();
const Report = require("./Report");

router.post("/report", (req, res) => {
  let { numCases, numDeaths, lat, long } = req.body;
  console.log(req.body);
  Report.create({
    numCases,
    numDeaths,
    lat,
    long,
  }).then(() => {
    res.status(201).send({
      response: "Relatório gerado.",
    });
  });
});

module.exports = router;
