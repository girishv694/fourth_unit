const mongoose = require('mongoose')
const user = require('./user.model')

const userSchema = new mongoose.Schema({
   
    pictures :[{type:String,required:true}],
    userId : {type:mongoose.Types.ObjectId,ref:"user"}
},{
    timestamps:true
})

const gallery = mongoose.model("gallery",userSchema)

module.exports = gallery;