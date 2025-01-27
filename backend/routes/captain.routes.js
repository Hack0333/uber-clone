const express = require("express");
const { body } = require("express-validator");
const captainController = require("../controllers/captainController");
const { captainAuth } = require("../middleware/captainAuth");

const router = express.Router();

router.post('/register', [
    body('email')
        .isEmail()
        .withMessage("Invalid Email"),
    body('fullname.firstname')
        .isLength({ min: 3 })
        .withMessage("Firstname must be at least 3 characters long"),
    body('fullname.lastname')
        .optional() // If lastname is optional
        .isLength({ min: 3 })
        .withMessage("Lastname must be at least 3 characters long"),
    body('password')
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long"),
    body('vehicle.plate')
        .isLength({ min: 4 })
        .withMessage("Plate number must be at least 4 digits long"),
    body('vehicle.type')
        .isIn(["motorcycle", "car", "auto"])
        .withMessage("Vehicle type must be one of 'motorcycle', 'car', or 'auto'"),
    body('vehicle.capacity')
        .isNumeric()
        .withMessage("Vehicle capacity must be at least 1"),
    body('vehicle.color')
        .isString()
        .withMessage("Vehicle color must be a string"),
], captainController.registerCaptain);

router.post('/login',[
    body('email')
        .isEmail()
        .withMessage("Invalid email"),
    body('password')
        .isLength({min : 6})
        .withMessage("Must be 6 character long")
],captainController.loginCaptain);

router.get('/profile',captainAuth,captainController.captainProfile);

router.get('/logout',captainAuth,captainController.logoutCaptain);

module.exports = router;
