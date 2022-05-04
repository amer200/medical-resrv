const User = require('../models/users');

exports.login = (req, res, next) => {
    const name = req.body.name;
    const password = req.body.password;
    User.findOne({
            name: name
        })
        .then(u => {
            if (!u) {
                res.send('no user found')
            } else {
                if (password !== u.password) {
                    res.send('wrong password')
                } else {
                    req.session.user = u;
                    console.log(req.session)
                    res.redirect('/admin')
                }
            }
        })
}
exports.getLogin = (req, res, next) => {
    res.render('admin/login')
}
exports.isAdmin = (req, res, next) => {
    console.log(req.session.user)
    if (req.session.user && req.session.user._id == '627232856b88df7a027a3a62') {
        next()
    } else {
        res.redirect('/admin/login')
    }
}
exports.logOut = (req, res, next) => {
    req.session.destroy();
    res.redirect('/')
}