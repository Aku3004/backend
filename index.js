const express=require("express");
require("dotenv").config();

const app=express();

const port=process.env.PORT;

app.get('/',(req,res)=>{
    res.send("hello world");
});

app.get('/about',(req,res)=>{
    console.log("hello from aakash");
})

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})