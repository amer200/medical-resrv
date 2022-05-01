const Resrv = require('../models/reservation');

exports.getMain = (req, res, next) =>{
    res.render('main/index')
}
exports.PostRserv = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const debartment = req.body.debartment;
    const message = req.body.message;
    const resrv = new Resrv({
        name: name,
        email: email,
        phone: phone,
        debartment: debartment,
        message: message
    })
    resrv.save()
        .then(r => {
            res.send(r)
        })
        .catch(err => {
            res.send(err)
        })
}