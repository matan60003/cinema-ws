const { json } = require('express');
const express = require('express');
const router = express.Router();
const moviesBL = require('../BLs/moviesBL');



router.route('/').get(async (req, resp) => {
    let data = await moviesBL.getAllMovies()
    return resp.json(data)
})


router.route('/:id').get(async (req, resp) => {
    let id = req.params.id
    let data = await moviesBL.getMoviesById(id)
    return resp.json(data)
})


router.route('/:id').put(async (req, resp) => {
    let id = req.params.id
    let movieObj = req.body
    let status = await moviesBL.updateMovie(id, movieObj)
    return resp.json(status)
})


router.route('/:id').delete(async (req, resp) => {
    let id = req.params.id
    let status = await moviesBL.deleteMovie(id)
    return resp.json(status)
})


router.route('/').post(async (req, resp) => {
    let newMovie = req.body
    let status = await moviesBL.addMovie(newMovie)
    return resp.json(status)
})










module.exports = router;