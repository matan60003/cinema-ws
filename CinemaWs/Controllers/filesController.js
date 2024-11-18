const express = require('express');
const router = express.Router();

const usersFileBL = require('../BLs/userFileBL')

//get users from file

router.route('/usersfile')
    .get(async (req, resp) => {
        let data = await usersFileBL.readUsersFile()
        return resp.json(data)
    })



router.route('/usersfile')
    .post(async (req, resp) => {
        let obj = req.body
        let status = await usersFileBL.addUser(obj)
        return resp.json(status)
    })



router.route('/usersfile/:id').get(async (req, resp) => {
    let id = req.params.id
    let data = await usersFileBL.getUserById(id)
    return resp.json(data)
})


router.route('/usersfile/:id').delete(async (req, resp) => {
    let id = req.params.id
    let data = await usersFileBL.deleteUser(id)
    return resp.json(data)
})

router.route('/usersfile/:id').put(async (req, resp) => {
    let id = req.params.id
    let userObj = req.body
    let status = await usersFileBL.updateUser(id, userObj)
    return resp.json(status)
})



module.exports = router;
