const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    name: String,
    job: String,
    desc: String
})

module.exports = mongoose.model('Doctor', doctorSchema);