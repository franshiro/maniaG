function isLogin(req,res,next){
    if( !req.session.user ){
        res.redirect("/login");
    }else{
        next();
    }

    // next()
}

module.exports = isLogin;