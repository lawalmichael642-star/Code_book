const express = require('express');
const { registerUser, registerAdmin, loginUser, logoutUser, getUserProfile, loginStatus } = require('../controllers/userController');
const { userProtect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post('/registerUser', registerUser);
router.post('/registerAdmin', registerAdmin);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/userProfile', userProtect, getUserProfile);
router.get('/loginStatus', loginStatus);

module.exports = router;
