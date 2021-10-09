const express = require('express')
const app = express();
const connect = require('./config/db')
const user = require('./controllers/user.controller')

app.use(express.json());



app.use('',user);

app.listen(2000, async()=>{
    await connect();
    console.log("connected");
})