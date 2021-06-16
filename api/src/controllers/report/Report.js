const Sequelize = require("sequelize");
const connection = require("../../database/database");

const Report = connection.define("reports", {
  numCases: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  numDeaths: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lat: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  long: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Report.sync({ force: false });

module.exports = Report;
