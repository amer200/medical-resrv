const Resrv = require('../models/reservation');

exports.getMain = (req, res, next) => {
    res.render('main/index')
}
exports.PostRserv = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const department = req.body.department;
    const message = req.body.message;
    console.log(req.body)
    const resrv = new Resrv({
        name: name,
        email: email,
        phone: phone,
        department: department,
        message: message
    })
    resrv.save()
        .then(r => {
            res.redirect('/')
        })
        .catch(err => {
            res.send(err)
        })
}