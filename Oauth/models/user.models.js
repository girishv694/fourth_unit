const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
     User_name : {type:String,required:true},
     password : {type:String,required:true},
     role:{type:Array,required:true}
     

},{
    timestamps:true
})

const user = mongoose.model('user',userSchema);
module.exports = user;