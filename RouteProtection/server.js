const express = require('express')
const app = express();
const register = require('./routes/auth')
const connect = require('./config/db');
const posts = require('./routes/post')

app.use(express.json());


app.use('',register);
app.use('',posts)



app.listen(2001, async ()=>{
    await connect();
    console.log("DB connected and server started on port 2001")
})