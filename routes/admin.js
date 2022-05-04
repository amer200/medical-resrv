const express = require('express');
const route = express.Router();
const adminController = require('../controllers/admin');
const authController = require('../controllers/auth');
route.get('/', authController.isAdmin, adminController.getMain);
route.post('/delete-reserv/:id', authController.isAdmin, adminController.deleteResrv)
route.post('/edit-reserv/:id', authController.isAdmin, adminController.editResrv)
route.get('/get-reserv/:name', authController.isAdmin, adminController.getResrvByName)
/// login 
route.get('/login', authController.getLogin);
route.post('/login', authController.login);
route.get('/logout', authController.logOut);
module.exports = route