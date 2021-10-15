const express = require('express')

const router = express.Router();
const user = require('../models/user.model')
const gallery = require('../models/gallery.model')
const upload = require('../middleware/file-upload')
const fs = require('fs')


router.post('/single',upload.single('userImage'), async(req,res)=>{
    const User = await user.create({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        profile_pic : req.file.path
    })
    res.send({User});
})

router.post('/gallery',upload.any('userImages') ,async(req,res)=>{
    const filepaths = req.files.map(file=> file.path)


     const User = await gallery.create({
       
        pictures : filepaths,
        userId:req.body.userId
    })
    res.send({User});
})


router.delete('/user/:id',async(req,res)=>{
const User = await user.findByIdAndDelete(req.params.id).lean().exec();



return res.status(200).send({User})
})



router.delete('/gallery/:id',async(req,res)=>{
    const User = await gallery.findByIdAndDelete(req.params.id).lean().exec();
    
    
    
    return res.status(200).send({User})
    })



router.patch('/user/:id',async(req,res)=>{
    const User = await user.findByIdAndUpdate(req.params.id).lean().exec();
    
    return res.status(200).send({User})
    })

module.exports= router;