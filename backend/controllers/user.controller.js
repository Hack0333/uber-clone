const BlacklistedToken = require("../models/blacklistedToken.model");
const userModel = require("../models/user.model");
const userService = require("../services/user.services");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({error});
  }
  const { fullname, email, password } = req.body;

  const OldUser = await userModel.findOne({email}).select("+password");

  if(OldUser){
    return res.status(401).json("Allready registered");
  }

  const hashPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    firstname : fullname.firstname, 
    lastname: fullname.lastname,
    email,
    password: hashPassword,
  });

  const token = user.generateToken();
  res.cookie('token',token);
  res.status(201).json({
    token:token,
    user,
  });
};

module.exports.loginUser = async(req,res,next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }
  const {email,password} = req.body;

  if(!email || !password){
    return res.status(401).json({Message : "All fields are required"});
  }

  const user = await userModel.findOne({email}).select("+password");

  if(!user){
    return res.status(401).json("Invalid email and password");
  }

  const isMatch = await user.comparePassword(password);

  if(!isMatch){
    return res.status(401).json("Invalid email and password");
  }

  const token = user.generateToken();

  res.cookie('token',token);

  return res.status(201).json({token,user});
}

module.exports.userProfile = (req,res,next)=>{
  res.status(201).json({
    user : req.user
  })
}

module.exports.logoutUser = async (req, res, next) => {
    try {
        const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);

        await BlacklistedToken.create({ token });

        res.clearCookie('token');

        return res.status(200).json({ message: "You are logged out successfully" });
    } catch (error) {
        console.error("Error during logout:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
