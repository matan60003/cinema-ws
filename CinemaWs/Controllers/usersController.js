const express = require('express');
const router = express.Router();
const usersBL = require('../BLs/usersBL');



router.route('/').get(async (req, resp) => {
    let data = await usersBL.getAllUsers()
    return resp.json(data)
})


router.route('/:id').get(async (req, resp) => {
    let id = req.params.id
    let data = await usersBL.getUsersById(id)
    return resp.json(data)
})


router.route('/:id').put(async (req, resp) => {
    try {
        let id = req.params.id
        let userObj = req.body
        let status = await usersBL.updateUser(id, userObj)
        return resp.json(status)
    } catch (err) {
        console.log(err);
    }
})

router.route('/:id').delete(async (req, resp) => {
    let id = req.params.id
    let status = await usersBL.deleteUser(id)
    return resp.json(status)
})


router.route('/').post(async (req, resp) => {
    let newUser = req.body
    let status = await usersBL.addUser(newUser)
    return resp.json(status)
})


router.route('/login').post(async (req, resp) => {
    let loginUser = req.body
    let status = await usersBL.loginUser(loginUser)
    return resp.json(status)
})


router.route('/userExist').post(async (req, resp) => {
    try {
        let userName = req.body
        let isExist = await usersBL.checkIfUserNameExistsAndUpdatePassword(userName)
        return resp.json(isExist)
    } catch (err) {
        return resp.json(err)
    }

})

module.exports = router;