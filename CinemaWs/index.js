const express = require('express')
const cors = require('cors')

require('./configs/dataBase')

const filesController = require('./Controllers/filesController')
const permissionsFilesController = require('./Controllers/permissionFilesController')
const membersController = require('./Controllers/membersController')
const moviesController = require('./Controllers/moviesController')
const subsController = require('./Controllers/subscriptionsController')
const usersController = require('./Controllers/usersController')






const app = express();
app.use(cors())
app.use(express.json());
app.use('/files', filesController)
app.use('/files2', permissionsFilesController)
app.use('/members', membersController)
app.use('/movies', moviesController)
app.use('/subscriptions', subsController)
app.use('/users', usersController)

app.use(express.urlencoded({ extended: true }))




app.listen(8001,
    () =>
        console.log("The server is Running on port 8001")
);