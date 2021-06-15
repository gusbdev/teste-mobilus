const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

async function callApi() {
  await axios
    .get(
      "https://api.covid19api.com/country/brazil?from=2021-01-01T00:00:00Z&to=2021-06-01T00:00:00Z"
    )
    .then((response) => {
      console.log(response.data);
    });
}

app.use("/", (req, res) => {
  callApi();
});

app.listen(8080, () => {
  console.log("Running on port 8080");
});
