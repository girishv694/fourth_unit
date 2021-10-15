const express = require('express')
const multer = require('multer')
const app = express();

const connect = require('./config/db')
const upload = require('./controllers/user.controller')
app.use(express.json())

app.use('',upload)





app.listen(2000, async()=>{
    await connect();
    console.log("connected running on 2000")
});