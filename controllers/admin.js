const Resrv = require('../models/reservation');

exports.getMain = (req, res, next) => {
    Resrv.find()
        .then(r => {
            res.render('admin/admin', {
                r: r
            })
        })
        .catch(err => {
            res.send(err.message)
        })
}
exports.getResrv = (req, res, next) => {
    Resrv.find()
        .then(r => {
            res.send(r)
        })
        .catch(err => {
            res.send(err.message)
        })
}