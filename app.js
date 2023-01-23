const express = require('express');
const app = express();

//require('dotenv').config({ path: '.env' })

const routes = require('./routes');
routes(app);

module.exports = app;