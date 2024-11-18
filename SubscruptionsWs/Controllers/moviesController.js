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
    let movie = await moviesBL.getMoviesById(id)
    return resp.json(movie)
})



router.route('/:id').put(async (req, resp) => {
    try {
        let id = req.params.id
        let movieToUpdate = req.body
        let status = await moviesBL.updateMovieById(id, movieToUpdate)
        return resp.json(status)
    }
    catch (err) {
        console.log(err);
    }
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