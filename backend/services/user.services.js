const userModel = require("../models/user.model");
// const {validationResult} = require("express-validator");    

module.exports.createUser = async({firstname,lastname,email,password})=>{
    if(!firstname || !password || !email){
        throw error("All fields are required");
    }
    
    const user =await userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    })

    return user;
}