const connect = require('./src/config/db')

const express = require('express')
const app = express();
app.use(express.json())
const user = require('./controllers/user.controller')


app.use('',user);










app.listen(2000,async()=>{
    await connect();
    console.log("db connected");
})

