const moongoose = require('mongoose')

moongoose.connect("mongodb://localhost:27017/UserDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
