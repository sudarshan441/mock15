const {Schema,model} =require("mongoose")

const quizSchema=new Schema({
    category:String,
})

const quizModel=model("quiz",quizSchema);


module.exports=quizModel;