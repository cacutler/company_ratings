const express = require("express")
const app = express()
const model = require("./model")
const cors = require("cors")
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.get("/company-ratings", async (request, response) => {

})
app.get("/company-ratings/:id", async (request, response) => {

})
app.post("/company-ratings", async (request, response) => {

})
app.delete("/company-ratings/:id", async (request, response) => {

})
app.put("/company-ratings/:id", async (request, response) => {

})
app.listen(8080, () => {
    console.log("Server listening on http://localhost:8080.")
})