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
exports.deleteResrv = (req, res, next) => {
    const id = req.params.id;
    Resrv.findByIdAndDelete(id)
        .then(r => {
            res.redirect('/admin')
        })
        .catch(err => {
            res.send(err.message)
        })
}
exports.editResrv = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const department = req.body.department;
    const message = req.body.message;
    const id = req.params.id;
    Resrv.findById(id)
        .then(r => {
            r.name = name;
            r.email = email;
            r.phone = phone;
            r.message = message;
            if (department) {
                r.department = department;
            }
            return r.save()
        })
        .then(r => {
            res.redirect('/admin')
        })
        .catch(err => {
            res.send(err.message)
        })
}
exports.getResrvByName = (req, res, next) => {
    const name = req.params.name;
    console.log(name)
    Resrv.find({
            name: name
        })
        .then(r => {
            res.send(r)
        })
        .catch(err => {
            res.send(err.message)
        })
}