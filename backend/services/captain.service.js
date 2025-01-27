const captainModel = require("../models/captain.model");

module.exports.createCaptain = async({
    firstname,lastname, email, password,color,plate,capacity,type
})=>{
    if(!firstname || !email || !password || !color || !plate || !capacity || !type ){
        return console.log("All fileds required");
    }

    const captain = await captainModel.create({
        fullname : {
            firstname,
            lastname 
        },
        email,
        password,
        vehicle:{
            plate,
            color,
            type,
            capacity
        }
    })

    return captain;
}