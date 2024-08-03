import express from "express";

const router = express.Router();
// import {Post} from "../models/Post.js"
import {User} from "../models/User.js"
import bcrypt from "bcrypt"

router.get("/:id", async(req, res)=>{
    try{
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err)
    }
});

export default router;
