const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); // Fix typo in bcrypt import
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: [true, "First name is required"],
            minlength: [3, "First name must be at least 3 characters long"]
        },
        lastname: {
            type: String,
            minlength: [3, "Last name must be at least 3 characters long"]
        }
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        minlength: [5, "Email must be at least 5 characters long"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        select: false
    },
    socketId: {
        type: String
    }
});

// Instance method to generate JWT token
userSchema.methods.generateToken = function () { // Use regular function to bind `this`
    const token = jwt.sign({ _id: this._id }, process.env.JWTSECRET, {
        expiresIn: "24h"
    });
    return token;
};

// Instance method to compare password
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password); // Return the result directly
};

// Static method to hash password
userSchema.statics.hashPassword = async function (password) {
    return bcrypt.hash(password, 10); // Return the hashed password directly
};

const userModel = mongoose.model("user", userSchema); 

module.exports = userModel;
