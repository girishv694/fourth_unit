const mongoose = require('mongoose')

const userSchema = new mongoose.Schema ({

    first_name : {type:String, required:true},
    last_name : {type:String,required:true},
    email :{type:String,required:true}
})

const schema = mongoose.model("user",userSchema);

module.exports = schema;