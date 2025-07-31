const express = require("express")
const uploadRouter = require("./api/upload")
const router = express.Router()

router.use("/image", uploadRouter)

module.exports = router