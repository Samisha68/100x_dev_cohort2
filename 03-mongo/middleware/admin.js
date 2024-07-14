// Middleware for handling auth

//adding the Admin file 
const {Admin}=require("../db");
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username=req.headers.username; //abc@gmail.com
    const password=req.headers.password;//1238937
    Admin.findOne({
        username: username,
        password: password
    })
    .then(function(value){
        if(value){
            next();
        }
        else{
            res.status(403).json({
                msg: "The admin doesnt exist"
            })
        }
    })
}

module.exports = adminMiddleware;