const express = require("express");
const feather = express();
const consign = require('consign')();
const bodyParser = require('body-parser');
const configEnv = require('dotenv');

configEnv.config();

feather.use(bodyParser.urlencoded({ extended: true }));

consign.include('./src/routes')
    // .then('./src/config/dbConnection.js')
    // .then('./src/models')
    // .then('./src/controllers')
    .into(feather);

// feather.use((req, res, next) => {
//     res.status(404).render('404');
// });

module.exports = feather;