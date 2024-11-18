const { json } = require('express');
const express = require('express');
const router = express.Router();
const subscruptionsBL = require('../BLs/subscruptionsBL');


router.route('/').get(async (req, resp) => {
    let data = await subscruptionsBL.getAllSubscruptions()
    return resp.json(data)
})



router.route('/:id').get(async (req, resp) => {
    let id = req.params.id
    let subscruption = await subscruptionsBL.getSubscruptionsById(id)
    return resp.json(subscruption)
})



router.route('/:id').put(async (req, resp) => {
    try {
        let id = req.params.id
        let subscruptionToUpdate = req.body
        let status = await subscruptionsBL.updateSubscruptionById(id, subscruptionToUpdate)
        return resp.json(status)
    }
    catch (err) {
        console.log(err);
    }
})



router.route('/:id').delete(async (req, resp) => {
    let id = req.params.id
    let status = await subscruptionsBL.deleteSubscruption(id)
    return resp.json(status)
})



router.route('/').post(async (req, resp) => {
    let newSubscruption = req.body
    let status = await subscruptionsBL.addSubscruption(newSubscruption)
    return resp.json(status)
})



router.route('/deleteMovie/:idSub/:idMovie').delete(async (req, resp) => {
    let idSub = req.params.idSub
    let idMovie = req.params.idMovie
    let status = await subscruptionsBL.deleteMovieFromSub(idSub, idMovie)
    return resp.json(status)
})



router.route('/addMovie/:idSub').post(async (req, resp) => {
    let idSub = req.params.idSub
    let newMovie = req.body
    let status = await subscruptionsBL.addMovieToSub(idSub, newMovie)
    return resp.json(status)
})
module.exports = router;