const jwt = require('jsonwebtoken')

module.exports = function auth (req,res,next){
    const token = req.header('auth')
    if(!token)
    return res.status(401).send('You dont have permission');

    try{
        const verified = jwt.verify(token,process.env.TOKEN_SECRET)
        req.user = verified;
        next();

    }catch(err){
        res.send('Invalid token')
    }
}
