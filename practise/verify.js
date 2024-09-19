const express=require("express");
const app=express();

app.use(express.json());

app.post("/abc",function(req,res){
    const kid=req.body.kid;
    const klength=kid.length;
    res.send("You have"+klength+"kidneys");
})

app.listen(3000);