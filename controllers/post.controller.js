var Posts = require('../models/posts.model');

module.exports = {
    index: (req, res)=>{
        res.render('post', {appTitle: 'Post'});
    },
    postIndex: async (req, res)=>{
        var article = req.body;
        await Posts.create(article, (err, article)=>{
            if(err){
                console.log(err);
            }
            article.save();
        });
        res.redirect('/');
    }
}