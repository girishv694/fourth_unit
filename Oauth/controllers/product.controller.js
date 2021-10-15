const express = require('express')
const router = express.Router();
const products = require('../models/products.model')
const authorize = require('../middleware/authorize')

router.post('',async(req,res)=>{
   const product = await products.create(req.body);
   return res.status(201).send({product})
})




router.get('',authorize(["user","admin"]),async(req,res)=>{
    const product = await products.find().lean().exec();
    return res.status(200).send({product})
})

module.exports = router;