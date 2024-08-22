const mongoose=require('mongoose');
const {Schema}=require("zod");

const mongoConnection=async ()=>{
    try{
        await mongoose.connect("mongodb+srv://Samisha:samisha@cluster0.ch0rkzn.mongodb.net/paytm");
        console.log("Connection Established");
    }
    catch(error){
        console.log("Connection Failed "+error);
    }

};
mongoConnection();

const userSchema=new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlenght: 3,
        unique: true,
        trim: true,
        lowercase: true,
        maxlength: 30
    },
    password: {
        type: String,
        required: true,
        minlength: 6

    },
    firstname: {
        type: String,
        required: true,
        maxlength: 50,
        trim: true


    },
    lastname: {
        type: String,
        required: true,
        maxlength: 50,
        trim: true

    }
});

const accountSchema=new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const User= mongoose.model('User',userSchema);
const Account =mongoose.model('Account',accountSchema);
module.exports={
    User,
    Account,
};
