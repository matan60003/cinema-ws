const { json } = require('express');
const express = require('express');
const router = express.Router();
const subBL = require('../BLs/subscriptionsBL');


router.route('/').get(async (req, resp) => {
    let data = await subBL.getAllSub()
    return resp.json(data)
})



router.route('/:id').get(async (req, resp) => {
    let id = req.params.id
    let data = await subBL.getSubById(id)
    return resp.json(data)
})


router.route('/:id').put(async (req, resp) => {
    let id = req.params.id
    let subObj = req.body
    let status = await subBL.updateSub(id, subObj)
    return resp.json(status)
})


router.route('/:id').delete(async (req, resp) => {
    let id = req.params.id
    let status = await subBL.deleteSub(id)
    return resp.json(status)
})


router.route('/').post(async (req, resp) => {
    let newSub = req.body
    let status = await subBL.addSub(newSub)
    return resp.json(status)
})






module.exports = router;