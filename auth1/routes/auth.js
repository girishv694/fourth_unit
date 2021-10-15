const express = require('express');

const router = express.Router();
const user = require('../models/user.model')
const bcrypt = require('bcryptjs');
require('dotenv').config();
const jwt = require('jsonwebtoken')
const posts = require('../models/post.model')
const verify = require('./verifyToken')


//Registration of user

// validation of data
const Joi = require('@hapi/joi')
const schema = Joi.object({
    name : Joi.string().min(6).required(),
    email :Joi.string().min(6).required().email(),
    password : Joi.string().min(6).required()
});

router.post('/register',async (req,res)=>{

//lets validate the data before create  a user
const {error} = schema.validate(req.body);

if(error)
return res.status(400).send(error.message);

// checking if the user already present in the database

const emailExist = await user.findOne({email:req.body.email})

if(emailExist) return res.status(400).send('Email already exists');

//hash the password

const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(req.body.password ,salt);


    const userr = new user({
        name : req.body.name,    
        email : req.body.email,    
        password : hashedPassword
    });

    try{
       const savedUser = await userr.save();
       res.send(savedUser);

   }
   catch(err){
      res.status(400).send(err)

    }
})


//Login

router.post('/login', async(req,res)=>{


//     const {error} = schema.validate(req.body);

// if(error)
// return res.status(400).send(error.message);

// checking if the email exist

const users = await user.findOne({email:req.body.email})

if(!users) return res.status(400).send('Email does not exists please register');

// check password is correct
const validPass = await bcrypt.compare(req.body.password,users.password) ;
if(!validPass) return res.status(400).send('Invalid password')

//Create and assign a token


const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET )
//console.log(token)
res.header('auth-token', token).send({users,token});






})




module.exports = router;