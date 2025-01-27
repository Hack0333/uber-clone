const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = new mongoose.Schema({
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
    },
    vehicle: {
        plate: {
            type: Number,
            required: true,
            minlength: [4, "Plate number must be at least 4 characters long"]
        },
        type: {
            type: String,
            enum: ["motorcycle", "car", "auto"],
            required: true
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, "Capacity must be at least 1"]
        },
        color: {
            type: String
        }
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive"
    },
    location: {
        latitude: {
            type: String
        },
        longitude: {
            type: String
        }
    }
});

// Generate JWT
captainSchema.methods.generateToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTSECRET, { expiresIn: "24h" });
    return token;
};

// Compare Password
captainSchema.methods.comparePassword = async function (password) {
    const result = await bcrypt.compare(password, this.password);
    return result;
};

// Hash Password
captainSchema.statics.hashPassword = async function (password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
};

// // Pre-save hook for password hashing
// captainSchema.pre("save", async function (next) {
//     if (this.isModified("password")) {
//         this.password = await bcrypt.hash(this.password, 10);
//     }
//     next();
// });

const captainModel = mongoose.model("captain", captainSchema);

module.exports = captainModel;
