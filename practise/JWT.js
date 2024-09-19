const express=require("express");
const app=express();
const jwtPassword="12345";
const jwt=require("jsonwebtoken");
app.use(express.json());
const ALL_USERS=[
    {
        username:"Samisha@gmail.com",
        password:"123",
        name : "Samisha hui hui",
    },
    {
        username:"Khushi@gmail.com",
        password:"1546",
        name : "khushi",
    },
    {
        username:"Sam@gmail.com",
        password:"8545",
        name : "helloworld",
    }
];

function userExists(username, password){
    //write logic to return true or false if user exists
    let exist=false;
    for(let i=0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username==username && ALL_USERS[i].password==password){
            exist=true;
        }
    }
    return exist;
}
app.post("/signin",function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    if(!userExists(username,password)){
        return res.status(403).json({
            msg:"User doesnot exist in memory database",
        });        
    }
    var token=jwt.sign({username: username},jwtPassword);

    return res.json({
        token,
    })
});

app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
    res.json({
      users: ALL_USERS.filter(function(value) {
        if (value.username == username) {
          return false
        } else {
          return true;
        }
      })
    })
  });
  
app.listen(3000);