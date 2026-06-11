const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils");

const registerUser = asyncHandler(async (req,res) => {
    const {name,email,password} = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({message: "All fields are required"});
    }

    const existing = await User.findOne({email})
    if (existing) {
        return res.status(400).json({message: "Email already exists"});
    }
const salt= await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password, salt);

const user =  await User.create({
    name,
    email,
    password:hashedPassword
})
const token = generateToken(user._id)

res.cookie("token", token,{
    path:"/",
    httpOnly:true,
    expires: new Date(Date.now() + 1000 * 86400),
    sameSite:"none",
    secure:true
})

if (user){
    const {_id, name, email, isAdmin, orderList, cartList}= user;
    res.status(201).json({
        _id,
        name,
        email,
        cartList,
        orderList,
        isAdmin
    })
}else{
    return res.status(400).json({message:"Invalid user data"})
}
})


const registerAdmin = asyncHandler(async (req,res) => {
    const {name,email,password} = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({message: "All fields are required"});
    }

    const existing = await User.findOne({email})
    if (existing) {
        return res.status(400).json({message: "Email already exists"});
    }
const salt= await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password, salt);

const user =  await User.create({
    name,
    email,
    password:hashedPassword,
    isAdmin:true
})
const token = generateToken(user._id)

res.cookie("token", token,{
    path:"/",
    httpOnly:true,
    expires: new Date(Date.now() + 1000 * 86400),
    sameSite:"none",
    secure:true
})

if (user){
    const {_id, name, email, isAdmin, orderList, cartList}= user;
    res.status(201).json({
        _id,
        name,
        email,
        cartList,
        orderList,
        isAdmin
    })
}else{
    return res.status(400).json({message:"Invalid user data"})
}
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = generateToken(user._id);

    res.cookie("token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400),
        sameSite: "none",
        secure: true,
    });

    const { _id, name, email: userEmail, isAdmin, orderList, cartList } = user;

    return res.status(200).json({
        _id,
        name,
        email: userEmail,
        cartList,
        orderList,
        isAdmin,
    });
});

const logoutUser = asyncHandler(async(req,res)=>{
     res.cookie("token", "", {
        path: "/",
        httpOnly: true,
        expires: new Date(0),
        sameSite: "none",
        secure: true,
    });

    res.status(200).json({message:"Logout successful"})

})

const getUserProfile = asyncHandler(async(req,res)=>{
    const user = req.user;
    if(user){
        const{name,email,_id, isAdmin, cartList,orderList}= user;

        res.status(200).json({
            _id,
            name,
            email,
            isAdmin,
            cartList,
            orderList
        })
    }else{
        return res.status(404).json({message:"User not found"})
    }
})

const loginStatus= asyncHandler(async(req,res)=>{
    const token = req.cookies?.token
    if(!token){
        return res.json(false)
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_TOKEN);
        return res.json(!!verified);
    } catch {
        return res.json(false);
    }
})

module.exports={
    registerUser,
    registerAdmin,
    loginUser,
    logoutUser,
    getUserProfile,
    loginStatus
}