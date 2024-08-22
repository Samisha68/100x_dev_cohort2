const express=require("express");
const accountRouter=express.Router();
const { authMiddleware}=require("../middlewares/middleware");
const {Account}=require("../db");
const {default : mongoose}=require("mongoose");

accountRouter.get("/balance",authMiddleware, async (req,res)=>{
    const account=await Account.findOne({
        userId: req.userId
    });
    res.json({
        balance : account.balance
    })
});

accountRouter.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();

    try {
        await session.startTransaction();
    
        const { amount, to } = req.body;
    
        // Validate amount
        if (typeof amount !== 'number' || amount <= 0) {
          throw new Error("Invalid amount");
        }
    
        // Validate 'to' field
        if (!to) {
          throw new Error("'to' field is required");
        }
    
        const account = await Account.findOne({
          userId: req.userId,
        }).session(session);
    
        if (!account || account.balance < amount) {
          throw new Error("Insufficient balance");
        }
    
        const toAccount = await Account.findOne({
          userId: to,
        }).session(session);
    
        if (!toAccount) {
          throw new Error("Invalid account");
        }
    
        await Account.updateOne(
          { userId: req.userId },
          {
            $inc: {
              balance: -amount,
            },
          }
        ).session(session);
    
        await Account.updateOne(
          { userId: to },
          {
            $inc: {
              balance: amount,
            },
          }
        ).session(session);
    
        await session.commitTransaction();
        res.json({
          message: "Transfer successful",
        });
      } catch (error) {
        await session.abortTransaction();
        console.error("Error during fund transfer:", error);
        res.status(500).json({
          message: "Internal Server Error",
        });
      } finally {
        session.endSession();
      }
    });     
    

module.exports = {accountRouter};