const express = require('express')
const posts = require('../models/post.model')
const router = express.Router();
const verify = require('./verifyToken')


router.post('/posts', async(req,res)=>{
    const pos = await posts.create(req.body)
    res.send({pos}) 
})

router.get('/posts',verify,async(req,res)=>{
    const postss = await posts.find().lean().exec();
res.send({postss});


})







module.exports = router;