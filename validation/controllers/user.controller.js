const express = require("express")
const users = require('../models/user.model');
const router = express.Router();
const {body,validationResult} = require('express-validator');


router.post('/user',[
    body('first_name').trim().isLength({min : 2}).withMessage('First_Name should be required with minimum 2 characters'),
    body('email').trim().isEmail().withMessage('Email must be valid').normalizeEmail().toLowerCase(),
    body('pincode').trim().isLength({min:6},{max:6}).withMessage('pincode should be 6 digits'),
    body('age').trim().isLength({max:3}).withMessage('age should be numeric between 1 to 100'),
    body('gender').isLength({min:4}).withMessage('either male or female')
  
    
   
    
    
] 



,async(req,res)=>{
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            console.log(errors)
            errors.array().forEach(error=>{
                res.send(error.msg);
            })

            
        }

      

    }

    catch{

    }

});




module.exports = router;

