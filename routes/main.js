const express = require('express');
const route = express.Router();
const resrvController = require('../controllers/resrv');

route.get('/', resrvController.getMain);
route.post('/add-rserv', resrvController.PostRserv);

module.exports = route