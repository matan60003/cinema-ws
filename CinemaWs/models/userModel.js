const mongoose = require('mongoose')

const User = new mongoose.Schema({
    userName: mongoose.Schema.Types.String,
    password: mongoose.Schema.Types.String
})

module.exports = mongoose.model('users', User)