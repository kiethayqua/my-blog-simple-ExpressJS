// neu user da dang nhap thi khong can qua route auth/login
var Users = require('../models/users.model');

module.exports.checkLogin = async (req, res, next)=>{
    if(!req.signedCookies.userId){
        res.redirect('/auth/login');
        return;
    }

    var user = await Users.find({_id: req.signedCookies.userId});
    if(!user){
        res.redirect('/auth/login');
        return;
    }

    next();
}