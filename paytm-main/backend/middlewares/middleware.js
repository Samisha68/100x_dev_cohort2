
const {JWT_SECRET}=require("../config");
const jwt=require("jsonwebtoken");

const authMiddleware=(req,res,next)=>{
    const authheader=req.headers.authorization;
    if(!authheader || !authheader.startsWith('Bearer  ')){
        return res.status(403).json({});
    }
    const token=authheader.split(' ')[1];
    try{
        const decoded=jwt.verify(token,JWT_SECRET);
        req.userId=decoded.userId;
        next();
    }
    catch(error){
        return res.status(403).json({msg:"Authorization failed"});
    }
};

module.exports={authMiddleware};