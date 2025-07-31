const express = require("express")
const multer = require("multer")
const uploadController = require("../../controllers/uploadController")
const uploadRouter = express.Router()
const upload = multer({dest: "uploads"})

uploadRouter.post("/upload", upload.single("image"), uploadController)

module.exports = uploadRouter

// POSTMAN ER KEY TA "AVATAR" HOBE NA "IMAGE" HOBE (choto hater)