var mongoose = require('mongoose');

var usersSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

var Users = mongoose.model('Users', usersSchema, 'users');

module.exports = Users;