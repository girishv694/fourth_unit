const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
   title : {type:String,required:true},
   price : {type:Number,required:true}
    
})

const post = mongoose.model('product',productSchema);

module.exports = post;