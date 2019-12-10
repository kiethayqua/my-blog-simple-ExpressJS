var Users = require('../models/users.model');

module.exports.click = async (req, res, next) => {
    if (!req.signedCookies.userId) {
        next();
    }

    var user = await Users.find({ _id: req.signedCookies.userId });
    if (!user) {
        next();
    }

    res.redirect('/post');
}
