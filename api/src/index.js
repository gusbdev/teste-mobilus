const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");
const connection = require("./database/database");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reportController = require("./controllers/report/ReportController");

app.use(cors());

connection
  .authenticate()
  .then(() => {
    console.log("Success");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/cases", async (req, res) => {
  const { data } = await axios(
    "https://api.covid19api.com/country/brazil?from=2021-01-01T00:00:00Z&to=2021-06-01T00:00:00Z"
  );
  return res.send(data);
});

app.use("/", reportController);

app.listen(8080, () => {
  console.log("Running on port 8080");
});
