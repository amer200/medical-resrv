const express = require('express');
const route = express.Router();
const adminController = require('../controllers/admin');
route.get('/', adminController.getMain);

module.exports = route