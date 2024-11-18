const moongoose = require('mongoose')

moongoose.connect("mongodb://localhost:27017/SubscriptionsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
