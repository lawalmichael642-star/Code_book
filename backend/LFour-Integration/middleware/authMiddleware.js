const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const adminProtect = asyncHandler(async (req, res, next) => {
    const token = req.cookies?.token;
    if (!token) {
        res.status(401);
        throw new Error("Not authorized, no token");
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        const currentUser = await User.findById(decoded.id).select("-password");

        if (!currentUser) {
            res.status(401);
            throw new Error("Not authorized, user not found");
        }

        if (!currentUser.isAdmin) {
            res.status(403);
            throw new Error("Forbidden, you are not an admin");
        }

        req.user = currentUser;
        next();
    } catch (error) {
        res.status(401);
        throw new Error("Not authorized, invalid token");
    }
});

const userProtect = asyncHandler(async (req, res, next) => {
    const token = req.cookies?.token;
    if (!token) {
        res.status(401);
        throw new Error("Not authorized, no token");
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        const currentUser = await User.findById(decoded.id).select("-password");

        if (!currentUser) {
            res.status(404);
            throw new Error("User not found");
        }

        req.user = currentUser;
        next();
    } catch (error) {
        res.status(401);
        throw new Error("Not authorized, invalid token");
    }
});

module.exports = {
    adminProtect,
    userProtect,
    protect: userProtect,
};
