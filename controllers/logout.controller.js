module.exports = {
    index: (req, res)=>{
        res.clearCookie('userId');
        res.redirect('/auth/login');
    }
}