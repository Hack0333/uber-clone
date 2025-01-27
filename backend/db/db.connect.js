const mongoose = require("mongoose");
const mongoDb = process.env.MONGODB;
const connectToDatabase = ()=>{
    mongoose.connect(mongoDb)
    .then(()=>{
        console.log("Db connected successfully")
    })
    .catch((err)=>{
        console.log("Db Connection error ", err);
    })
}

module.exports = connectToDatabase;