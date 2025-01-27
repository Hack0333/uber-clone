const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectToDatabase = require("./db/db.connect");
const captainRoutes = require("./routes/captain.routes.js");
const userRoutes = require('./routes/user.routes.js');

connectToDatabase();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send("good");
})
app.use('/users',userRoutes);
app.use('/captain',captainRoutes);

module.exports = app;