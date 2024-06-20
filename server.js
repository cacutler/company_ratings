const express = require("express")
const app = express()
const model = require("./model")
const cors = require("cors")
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.listen(8080, () => {
    console.log("Server listening on http://localhost:8080.")
})