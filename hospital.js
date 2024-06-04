const express=require("express")
const app=express();
var users=[{
    name: "john",
    kidneys: [
        {
            healthy: true
        },
        {
            healthy: false 
        }
    ]
}]

app.use(express.json());

app.get("/",function(req,res){
    const user_kid=users[0].kidneys;
    const numberofKidneys=user_kid.length;
    let numberofHealthy_kidneys=0;
    for(let i=0; i<user_kid.length; i++){
        if(user_kid[i].healthy){
            numberofHealthy_kidneys+=1;
        }
    }
    const numberofUnhealthy_kidneys=numberofKidneys-numberofHealthy_kidneys;
    res.json(
        {
            numberofKidneys,
            numberofHealthy_kidneys,
            numberofUnhealthy_kidneys
        }
    )
})
app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        msg: "done"
    });

})

app.put("/",function(req,res){
    for(let i=0; i<users[0].kidneys.length ; i++){
        users[0].kidneys[i].healthy=true; 
    }
    res.json({}); 
})

app.delete("/",function(req,res){
    const newKidneys=[];
    for(let i=0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys=newKidneys;
    res.json({msg: "removed  "})
})

app.listen(4000)