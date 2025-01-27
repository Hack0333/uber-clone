const BlacklistedToken = require("../models/blacklistedToken.model");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

module.exports.authUser = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const blacklistToken = await BlacklistedToken.findOne({ token });
        if (blacklistToken) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const decoded = jwt.verify(token, process.env.JWTSECRET);

        const user = await userModel.findById(decoded._id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user = user;

        return next(); 
    } catch (error) {
        console.error("Authentication error:", error);

        return res.status(401).json({ error: "Unauthorized" });
    }
};
