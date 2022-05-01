require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

//serv static file
app.use(express.static('public'))
// routes
const adminRoutes = require('./routes/admin');
const mainRoutes = require('./routes/main');
app.use('/admin', adminRoutes)
app.use('/', mainRoutes)


mongoose.connect(process.env.db)
    .then(result => {
        app.listen(process.env.port)
    })
    .then(result => {
        console.log('connected')
    }).catch(err => {
        console.log(err)
    })