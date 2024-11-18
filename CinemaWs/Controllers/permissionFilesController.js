const express = require('express');
const router = express.Router();

const PermissionsFileBL = require('../BLs/permissionFileBL')

router.route('/permissionsfile').get(async (req, resp) => {
    let data = await PermissionsFileBL.readPermissionsFile()
    return resp.json(data)
})


router.route('/permissionsfile').post(async (req, resp) => {
    let obj = req.body
    let status = await PermissionsFileBL.addPermission(obj)
    return resp.json(status)
})


router.route('/permissionsfile/:id').get(async (req, resp) => {
    let id = req.params.id
    let data = await PermissionsFileBL.getPermissionById(id)
    return resp.json(data)
})


router.route('/permissionsfile/:id').delete(async (req, resp) => {
    let id = req.params.id
    let data = await PermissionsFileBL.deletePermission(id)
    return resp.json(data)
})


router.route('/permissionsfile/:id').put(async (req, resp) => {
    let id = req.params.id
    let permissionObj = req.body
    let status = await PermissionsFileBL.updatedPermission(id, permissionObj)
    return resp.json(status)
})

module.exports = router;