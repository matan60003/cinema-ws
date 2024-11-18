const mongoose = require('mongoose')

const Subscruption = new mongoose.Schema({
    memberId: mongoose.Schema.Types.ObjectId,
    movies: [{
        movieId: mongoose.Schema.Types.ObjectId,
        date: Date
    }]
})

module.exports = mongoose.model('subscriptions', Subscruption)