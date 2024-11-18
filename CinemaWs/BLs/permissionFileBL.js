const js = require('jsonfile')


const readPermissionsFile = () => {
    return new Promise((resolve, reject) => {
        js.readFile('./Data/permissions.json', (err, data) => {
            (err) ? reject(err) : resolve(data.permissions)
        })
    })
}


const addPermission = (obj) => {
    return new Promise((resolve, reject) => {
        js.readFile('./Data/permissions.json', (err, data) => {
            if (err) {
                reject(err)
            } else {
                let newJsonFile = {
                    permissions: [...data.permissions, obj]
                }
                js.writeFile('./Data/permissions.json', newJsonFile, err => err ? reject(err) : resolve('Permission Created In File'))
            }
        })
    })
}


const getPermissionById = (id) => {
    return new Promise((resolve, reject) => {
        js.readFile('./Data/permissions.json', (err, data) => {
            if (err) {
                reject(err)
            } else {
                const jsonFilePermissions = [...data.permissions]
                const indexPermission = jsonFilePermissions.findIndex(permission => permission._id === id)
                resolve(jsonFilePermissions[indexPermission])
            }
        })
    })
}


const deletePermission = (id) => {
    return new Promise((resolve, reject) => {
        js.readFile('./Data/permissions.json', (err, data) => {
            if (err) {
                reject(err)
            } else {
                const permissions = [...data.permissions]
                const indexPermission = permissions.findIndex(permission => permission._id === id)
                // console.log(indexPermission);
                permissions.splice(indexPermission, 1)
                let newJsonFile = {
                    permissions: [...permissions]
                }
                js.writeFile('./Data/permissions.json', newJsonFile, err => err ? reject(err) : resolve('Permission Deleted In File'))
            }
        })
    })
}


const updatedPermission = (id, newObj) => {
    return new Promise((resolve, reject) => {
        js.readFile('./Data/permissions.json', (err, data) => {
            if (err) {
                reject(err)
            } else {
                const permissionsToUpdate = [...data.permissions]
                const indexPermission = permissionsToUpdate.findIndex(permission => permission._id === id)
                permissionsToUpdate[indexPermission] = {
                    _id: id,
                    ...newObj
                }
                let newJsonFile = {
                    permissions: [...permissionsToUpdate]
                }
                js.writeFile('./Data/permissions.json', newJsonFile, err => err ? reject(err) : resolve("Permission updated In File"))
            }
        })
    })
}










module.exports = {
    readPermissionsFile,
    addPermission,
    getPermissionById,
    deletePermission,
    updatedPermission
}