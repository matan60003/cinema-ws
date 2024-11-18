const mongoose = require('mongoose')

const Member = new mongoose.Schema({
    name: String,
    email: String,
    city: String
})

module.exports = mongoose.model('members', Member)