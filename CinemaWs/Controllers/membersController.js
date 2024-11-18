const { json } = require('express');
const express = require('express');
const router = express.Router();
const membersBL = require('../BLs/membersBL');



router.route('/').get(async (req, resp) => {
    let data = await membersBL.getAllMembers()
    return resp.json(data)
})


router.route('/:id').get(async (req, resp) => {
    let id = req.params.id
    let data = await membersBL.getMembersById(id)
    return resp.json(data)
})


router.route('/:id').put(async (req, resp) => {
    let id = req.params.id
    let memberObj = req.body
    let status = await membersBL.updateMember(id, memberObj)
    return resp.json(status)
})


router.route('/:id').delete(async (req, resp) => {
    let id = req.params.id
    let status = await membersBL.deleteMember(id)
    return resp.json(status)
})


router.route('/').post(async (req, resp) => {
    let newMember = req.body
    let status = await membersBL.addMember(newMember)
    return resp.json(status)
})





module.exports = router;

