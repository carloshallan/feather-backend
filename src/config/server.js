const express = require("express");
const feather = express();
const configEnv = require('dotenv');
const routes = require('../routes/');

require('../database');

configEnv.config();

feather.use(express.json());
feather.use(routes);

module.exports = feather;