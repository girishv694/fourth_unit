const express = require('express')
const router = express.Router();
const nodemailer = require('nodemailer')
const users  = require('../models/user.model');


router.post('/users', async(req,res)=>{

    const user = await users.create(req.body)

    var mailList =['admin1@gmail.com','admin2@gmail.com','admin3@gmail.com','admin4@gmail.com','admin5@gmail.com'];
    var message = {
        from : "girishv694@gmail.com",
        to : user.email,
        subject :`Welcome to ABC system ${user.first_name} ${user.last_name} `,
        text : `Hi ${user.first_name} confirm your email address`,
        html : "<p>HTML</p>"
    };

    var message1 = {
        from : "abc@gmail.com",

        to : mailList,
        subject:`${user.first_name} ${user.last_name} has registered with us`,
        text : `please welcome ${user.first_name}`,
        html : "<p>html</p>"
    }

    const abc = nodemailer.createTransport({
        host : "smtp.mailtrap.io",
        port :587,
        secure:false,
        auth:{
            user : "ddb219f686f808",
            pass : "a1d1bb9e21bd50"
        }
    })
    abc.sendMail(message)
    abc.sendMail(message1)
    return res.status(201).send({user})
})

router.get('/users',async(req,res)=>{
    const page = +req.query.page || 1;
    const size = +req.query.size || 5;

    const offset = (page-1)*size;
    const user = await users.find().skip(offset).limit(size).lean().exec();
    return res.send({user});
})


module.exports = router;