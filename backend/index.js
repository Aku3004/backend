import express from "express";
import dotenv from 'dotenv';

dotenv.config();

const app=express();

const port=process.env.PORT;

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {id:1,title:'joke1',content:'this is joke 1'},
        {id:2,title:'joke1',content:'this is joke 1'},
        {id:3,title:'joke1',content:'this is joke 1'},
        {id:4,title:'joke1',content:'this is joke 1'},
        {id:5,title:'joke1',content:'this is joke 1'}
    ];
    res.send(jokes)
});



app.listen(port,()=>{
    console.log(`server is running at port http://localhost:${port}`);
})