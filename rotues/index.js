const express = require('express');

const roturs = express.Router();

roturs.use('/admin',require('./admin'));

module.exports = roturs;