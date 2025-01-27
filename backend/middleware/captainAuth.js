const jwt= require("jsonwebtoken");
const captainModel = require("../models/captain.model");


module.exports.captainAuth = async(req,res,next)=>{
    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        if(!token){
            return res.status(401).json({message : "Unauthorized Captain"});
        }

        const decoded = jwt.verify(token , process.env.JWTSECRET);

        const user = await captainModel.findById(decoded._id);

        if(!user){
            return res.status(401).json({message : "Unauthorized Captain"});
        }
        req.user = user;
        return next();

    } catch (error) {
        res.status(401).json({error});
    }
}