require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/users');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

var store = new MongoDBStore({
    uri: process.env.db,
    collection: 'mySessions'
});

// Catch errors
store.on('error', function (error) {
    console.log(error);
});
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
        httpOnly: false
    },
    store: store,

}))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
app.set('view engine', 'ejs');


// // parse application/json
// app.use(bodyParser.json())

//serv static file
app.use(express.static('public'))
// routes
const adminRoutes = require('./routes/admin');
const mainRoutes = require('./routes/main');
app.use('/admin', adminRoutes)
app.use('/', mainRoutes)


mongoose.connect(process.env.db)
    .then(result => {
        User.findOne({
                name: 'admin'
            })
            .then(u => {
                app.listen(process.env.port)
                if (!u) {
                    const user = new User({
                        _id: new ObjectId("627232856b88df7a027a3a62"),
                        name: 'admin',
                        password: '123'
                    })
                    return user.save()
                }
            })
    })
    .then(result => {
        console.log('connected')
    }).catch(err => {
        console.log(err)
    })