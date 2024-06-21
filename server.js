const express = require("express")
const app = express()
const model = require("./model")
const cors = require("cors")
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.get("/company-ratings", async (request, response) => {
    try {
        let ratings = await model.CompanyRating.find()
        response.json(ratings)
    } catch (error) {
        console.log(error)
        response.status(400).send("Generic Error.")
    }
})
app.get("/company-ratings/:id", async (request, response) => {
    try {
        let rating = await model.CompanyRating.findOne({_id: request.params.id})
        response.json(rating)
    } catch (error) {
        console.log(error)
        response.status(400).send("Generic Error.")
    }
})
app.post("/company-ratings", async (request, response) => {
    try {
        let newRating = new model.CompanyRating({name: request.body.name, rating: parseInt(request.body.rating), review: request.body.review})
        let error = newRating.validateSync()
        if (error) {
            response.status(400).json(error)
            return
        }
        await newRating.save()
        response.status(201).json(newRating)
    } catch (error) {
        console.log(error)
        response.status(400).send("Generic Error.")
    }
})
app.delete("/company-ratings/:id", async (request, response) => {
    try {
        let isDeleted = await model.CompanyRating.findByIdAndDelete({_id: request.params.id})
        if (!isDeleted) {
            response.status(404).send("Could not find company rating :(.")
            return
        }
        response.status(204).send("Company rating is deleted.")
    } catch (error) {
        console.log(error)
        response.status(400).send("Generic Error.")
    }
})
app.put("/company-ratings/:id", async (request, response) => {
    try {
        let updatedRating = {name: request.body.name, rating: parseInt(request.body.rating), review: request.body.review}
        let putRating = await model.CompanyRating.findByIdAndUpdate({_id: request.params.id}, updatedRating, {new: true})
        if (!putRating) {
            response.status(404).send("Bruh, you're trying to update something that doesn't exist.  Learn how to use this API.")
            return
        }
        response.status(204).json(putRating)
    } catch (error) {
        console.log(error)
        response.status(400).send("Generic Error.")
    }
})
app.listen(8080, () => {
    console.log("Server listening on http://localhost:8080.")
})