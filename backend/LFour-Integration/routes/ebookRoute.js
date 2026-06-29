const express = require("express");
const { createEbook, getAnEbook, getAllEbook, updateEbook } = require("../controllers/ebookController");
const { adminProtect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/createEbook", adminProtect, createEbook);
router.get("/singleEbook/:id", getAnEbook);
router.get("/getAllEbook", getAllEbook);
router.put("/updateEbook/:id", adminProtect, updateEbook);

module.exports = router;
