const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const quizModel = require("./quizModel");
const app=express();
app.use(express.json());
app.use(cors());
app.get("/",async(req,res)=>{
    const {category,level,total} = req.query
    const data =await quizModel.find({difficulty:"easy"}).limit(total);
 res.send(data)
})

mongoose.connect("mongodb+srv://sudarshan:sudarshan@cluster0.ydgncyl.mongodb.net/mock15").then(()=>{
    app.listen(8005,()=>{
        console.log("server started")
    })
})