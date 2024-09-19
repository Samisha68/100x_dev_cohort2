const express=require("express");
// const zod=require("zod");
// const app=express();
// const schema=zod.array(zod.number());
// app.use(express.json());

const zod=require("zod");
function validateInput(obj){
    const schema=zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })
    const response=schema.safeParse(obj);
    console.log(response);
}

validateInput({
    email:"abc@gmail.com",
    password: "12149dhsjad"
})

app.post("/abc",function(req,res,next){
    const response=validateInput(req.body);
    if(!response.success){
        res.json({
            msg: "INVALID INPUTS"
        })
        return;
    }
    
});
app.listen(2000);
