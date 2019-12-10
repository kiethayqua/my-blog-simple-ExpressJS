var Posts = require('../models/posts.model');

module.exports = {
    index: async (req, res)=>{
        var articles = await Posts.find();
        res.render('index', {appTitle: 'Home', articles: articles});
    }
}