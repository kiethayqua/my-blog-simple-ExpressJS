var Posts = require('../models/posts.model');

module.exports = {
    view: async (req, res)=>{
        var id = req.params.id;
        console.log(id);
        var article = await Posts.find({_id: id});
        res.render('article', {article: article[0]});
    }
}