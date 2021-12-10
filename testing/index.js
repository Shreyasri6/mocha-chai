const bodyParser = require("body-parser");
const express = require("express");
const mongoose=require('mongoose');
const routes= require('./user/routes');
const app=express();
const port=3000;


app.use(bodyParser.json());
app.use(routes)

mongoose.connect("mongodb://localhost:27017/testuser",{
    useNewUrlParser:"true"
})

mongoose.connection.on("error",err=>{
    console.log("MongoDB Error ==> ",err);
})

mongoose.connection.on("connected",(err,res)=>{
    console.log("mongoose is connected")
})

app.listen(port,()=>{
    console.log(`server is listening at port ${port}`);
})
module.exports= app;
console.log("working")