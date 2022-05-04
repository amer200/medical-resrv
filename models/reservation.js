const mongoose = require('mongoose');

const resrvSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    department: String,
})

module.exports = mongoose.model('Resrv', resrvSchema);