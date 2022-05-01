const mongoose = require('mongoose');

const resrvSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    debartment: String,
})

module.exports = mongoose.model('Resrv', resrvSchema);