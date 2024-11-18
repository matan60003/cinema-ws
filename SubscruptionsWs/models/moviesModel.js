const mongoose = require('mongoose')

const Movie = new mongoose.Schema({
    name: String,
    genres: [String],
    image: String,
    premiered: Date
})

module.exports = mongoose.model('movies', Movie)