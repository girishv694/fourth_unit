const express = require('express')
const router = express.Router();

const user = require('../models/user.models');
//user registration


router.post('',async(req,res)=>{
    const users = await user.create(req.body);
    return res.status(201).send({users})
 })
 

module.exports = router;