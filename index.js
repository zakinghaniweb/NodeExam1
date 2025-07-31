// Import/Require =>
const express = require("express")
const cors = require("cors")
const router = require("./routes/routes")
const app = express()
const port = 8000

// MiddleWare =>
app.use(express.json())
app.use(cors())
app.use(router)

// Listening to Server =>
app.listen(port, (err)=>{
    if (err) return console.log(err)
    console.log(`The server is running at port ${port}`)
})

// POSTMAN ER KEY TA "AVATAR" HOBE NA "IMAGE" HOBE (choto hater)