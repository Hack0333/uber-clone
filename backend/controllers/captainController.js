const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {validationResult} = require("express-validator");
const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");


module.exports.registerCaptain = async(req,res,next)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(401).json({message : "Invalid Input"});
    }
    try {
        const { fullname , email, password, vehicle} = req.body;

        // console.log(req.body);
        

        const captainExist = await captainModel.findOne({email});

        if(captainExist){
            return res.status(401).json({message : "Captain already exists"});
        }

        const hashedPassword = await captainModel.hashPassword(password);

        const captain = await captainService.createCaptain({
            firstname : fullname.firstname,
            lastname : fullname.lastname,
            email,
            password : hashedPassword,
            color : vehicle.color,
            plate : vehicle.plate,
            type : vehicle.type,
            capacity : vehicle.capacity
        })

        if(!captain){
            return res.status(401).json({message : "Cannot create captain"});
        }

        const token = captain.generateToken();

        res.cookie('token',token);

        return res.status(201).json({token , captain});
        
    } catch (error) {
        console.error("Error in registerCaptain:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports.loginCaptain = async(req,res,next)=>{
    try {
        const error = validationResult(req);
        if(!error.isEmpty()){
            return res.status(401).json({error});
        }
        const {email , password} = req.body;
        if(!email || !password){
            return res.status(401).json({message : "All fields are required"});
        }
        const captain = await captainModel.findOne({email}).select("+password");
        if(!captain){
            return res.status(401).json("Invalid email and password");
        }
        
        const isMatch =await captain.comparePassword(password);

        if(!isMatch){
            return res.status(401).json("Invalid email and password");
        }

        const token = captain.generateToken();

        res.cookie('token',token);

        return res.status(201).json({token,captain});

    } catch (error) {
        console.error("Error in loginCaptain:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports.captainProfile = async(req,res,next)=>{
    res.status(201).json({
        user : req.user
      })
}

module.exports.logoutCaptain = (req,res,next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        res.clearCookie('token');

        return res.status(200).json({ message: "You are logged out successfully" });
    } catch (error) {
        console.error("Error during logout:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}