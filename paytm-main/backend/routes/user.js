const express=require("express");
const zod=require("zod");
const userRouter=express.Router();
const {User, Account}=require("../db.js");
const jwt=require("jsonwebtoken");
const {JWT_SECRET}=require('../config.js');

const {authMiddleware}=require("../middlewares/middleware.js");


const signupBody=zod.object({
    username: zod.string().email(),
    password: zod.string(),
    lastname: zod.string(),
    firstname: zod.string(),
});

const updateBody=zod.object({
    password: zod.string().optional(),
    firstname: zod.string().optional(),
    lastname: zod.string().optional(),
});

const signinBody=zod.object({
    username: zod.string().email(),
    password: zod.string(),
});

//post request
userRouter.post("/signup",async (req,res) => {
    const parsedSchema =signupBody.safeParse(req.body);
        if(!parsedSchema){
            return res.status(400).json({
                message: "Email Already Taken or Invalid inputs"
            });
        }
    const existingUser =await User.findOne({
        username: req.body.username,
    });
    if(existingUser){
        return res.status(411).json({
            message: "Email Already Taken or Invalid inputs"
            });
    }

    const user=await User.create({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    });
    const userId= user._id;
    await Account.create({
        userId,
        balance: 1+Math.random()*10000+1,
    });
    const token=jwt.sign({userId},JWT_SECRET);
    res.status(200).json({
        msg:"User Created Successfully",
        token: token,
    });
   
});


userRouter.post("/signin",async (req,res)=>{
    
    const parsedSchema =signinBody.safeParse(req.body);
    if(!parsedSchema.success){
        return res.status(400).json({
            message: "Error while logging in"
        });
    }
    

    const user=await User.findOne({
        username: req.body.username,
        password: req.body.password,
    })
    if(user){
        const token=jwt.sign({userId: user._id},JWT_SECRET);
        const urll=`http://localhost:5173/sendmoney?id=${user._id}&firstname=${user.firstname}&lastname=${user.lastname}`;
    
        res.status(200).json({
            token,urll
        });
    
    }

    res.status(411).json({
        msg: "Error while logging in"
    })

});


userRouter.put("/",authMiddleware, async (req,res)=>{
    const parsedSchema=updateBody.safeParse(req.body);
    if(!parsedSchema.success){
        res.status(411).json({
            message: "Error while updating information"
        })
    }
    await User.updateOne({id:req.userId},{$set: req.body});
    res.status(200).json({
        message: "Updated successfully"
    });
});

userRouter.get("/bulk",async (req,res)=>{
    const name=req.query.filter || "";
    const users=await User.find({
        $or: [{
            firstname: {
                $regex: name,
            }
        },  {
            lastname: {
                $regex: name,
            },
        },],   
    });
    res.json({
        user: users.map((user)=>({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id,
        })),
    });
});
module.exports={userRouter};
