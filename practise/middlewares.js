const express=require("express")
const app=express()

app.get("/health-checkup",function(req,res){
    const name=req.headers.name;
    const pass=req.headers.pass;
    const kidneyid=req.query.kidneyid;
    if(name!="samisha" && pass!="abc"){
        
        res.status(400).json({"msg": "something wrong with your inputs"})
        return       
    }
    if(kidneyid!=1 || kidneyid!=2){
        res.status(400).json({"msg": "something wrong with your inputs"})
        return
    } 
    
    res.json({
        msg: "your health is fine"
    })
});

app.listen(3002);