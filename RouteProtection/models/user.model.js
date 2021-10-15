const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name :{type:String},
    email :{type:String, required:true},
    password:{type:String,required:true},
    role:[{type:String}]

},{
    timestamps:true
})

const user = mongoose.model('user',userSchema);

module.exports = user;