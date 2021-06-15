const cors = require("cors");
const express = require("express");
const app = express();
const axios = require("axios");

app.use(cors());

app.use("/", async (req, res) => {
  const { data } = await axios(
    "https://api.covid19api.com/country/brazil?from=2021-01-01T00:00:00Z&to=2021-06-01T00:00:00Z"
  );
  return res.json(data);
});

app.listen(8080, () => {
  console.log("Running on port 8080");
});
