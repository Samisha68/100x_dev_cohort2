const express=require("express");
const app=express();
const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://samisha:amanongo@cluster0.ch0rkzn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
app.use(express.json());
const user=mongoose.model('users',{
    name:String,
    email:String,
    password:String
});
const kitty=new user({
    name:'sam'
});
kitty.save().then(()=>console.log('meow'));

app.listen(2000);