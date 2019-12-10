var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my-blog');
var Posts = require('./models/posts.model');

var indexRouter = require('./routes/index.route');
var articlesRouter = require('./routes/articles.route');
var authRouter = require('./routes/auth.route');
var adminRouter = require('./routes/admin.route');
var postRouter = require('./routes/post.route');
var logoutRouter = require('./routes/logout.route');

// kiem tra nguoi dung da dang nhap chua
var middlewareAuth = require('./middlewares/auth.middleware');
// kiem tra khi nguoi dung da dang nhap thi nut login redirect den post
// neu nguoi dung chua dang nhap hoac sai cookie thi next() den route /auth/login
var handdleLoginButton = require('./middlewares/handleLoginButton.middleware');

app.set('views', './views');
app.set('view engine', 'pug');

// dung middleware
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser('abcde'));
app.use('/', indexRouter);
app.use('/articles', articlesRouter);
app.use('/auth', handdleLoginButton.click, authRouter);
app.use('/admin', adminRouter);
app.use('/post', middlewareAuth.checkLogin, postRouter);
app.use('/logout', logoutRouter);

app.listen(3000, ()=>{
    console.log('Listening on port 3000');
});