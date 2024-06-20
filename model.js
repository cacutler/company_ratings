const mongoose = require("mongoose")
mongoose.connect(process.env.DBPASSWORD)
const CompanyRatingSchema = new mongoose.Schema({name: {type: String, required: [true, "Company must have a name."]}, rating: {type: Number, required: [true, "Company must have a rating."]}, review: {type: String, required: [true, "Company must have a review."]}})
const CompanyRating = mongoose.model("CompanyRating", CompanyRatingSchema)
module.exports = {CompanyRating: CompanyRating}