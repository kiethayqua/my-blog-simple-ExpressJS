var Users = require('../models/users.model');
var md5 = require('md5');

module.exports = {
    login: (req, res)=>{
        res.render('login');
    },
    postLogin: async (req, res)=>{
        var email = req.body.email;
        var password = req.body.password;

        var user = await Users.find({email: email});
        if(!user){
            res.render('login', {error: 'User is not exits!'});
            return;
        }

        var hashedPassword = md5(password);
        if(user[0].password !== hashedPassword){
            res.render('login', {error: 'Wrong password!'});
            return;
        }

        res.cookie('userId', user[0]._id, {signed: true});
        res.redirect('/post');
    }
}