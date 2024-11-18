const express = require('express')
const cors = require('cors')

const membersBL = require('./BLs/membersBL')
const moviesBL = require('./BLs/moviesBL')

require('./configs/database')

const moviesController = require('../SubscruptionsWs/Controllers/moviesController')
const membersController = require('../SubscruptionsWs/Controllers/membersController')
const subscruptionsController = require('../SubscruptionsWs/Controllers/subscruptionsController')
const app = express();
app.use(cors())
app.use(express.json());

app.use(express.urlencoded({ extended: true }))

app.use("/members", membersController)
app.use("/movies", moviesController)
app.use("/subscriptions", subscruptionsController)
app.listen(8000,
    () => {
        console.log("The server is Running on port 8000")
        // membersBL.populateDbWithMembers();
        // moviesBL.populateDbWithMovies();
    }
);



