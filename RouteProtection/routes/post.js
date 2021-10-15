const express = require('express')
const posts = require('../models/post.model')
const router = express.Router();
const verify = require('./verifyToken')
const authorize = require('../routes/authorize')


router.post('/posts', async(req,res)=>{
    const pos = await posts.create(req.body)
    res.send({pos}) 
})

router.get('/posts',verify,authorize(["admin","user"]),async(req,res)=>{
    const products = await posts.find().lean().exec();
    const user = req.user;
    delete user.password
return res.send({products,user});


})







module.exports = router;