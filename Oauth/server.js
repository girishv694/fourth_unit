const express = require('express')
const app = express();
const connect = require('./config/db')
const product = require('./controllers/product.controller')
const user = require('./controllers/user.controller')
app.use(express.json());


app.use('/product',product)
app.use('/user-register',user)

app.listen(2000,async()=>{
    await connect();
    console.log("DB connected and running on port 2000")
})