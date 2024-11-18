const js = require('jsonfile')


const readUsersFile = () => {
    return new Promise((resolve, reject) => {
        js.readFile('./Data/users.json', (err, data) => {
            (err) ? reject(err) : resolve(data.users)
        })
    })
}


const addUser = (obj) => {
    return new Promise((resolve, reject) => {

        js.readFile('./Data/users.json', (err, data) => {
            if (err) {
                reject(err)
            } else {
                let newJsonFile = {
                    users: [...data.users, obj]
                }
                js.writeFile('./Data/users.json', newJsonFile, err => err ? reject(err) : resolve("User Created In File"))

            }
        })

    })

}

const getUserById = (id) => {
    return new Promise((resolve, reject) => {
        js.readFile('./Data/users.json', (err, data) => {
            if (err) {
                reject(err)
            } else {
                const jsonFileUsers = [...data.users]
                //console.log(jsonFileUsers);
                const indexUser = jsonFileUsers.findIndex(user => user._id === id)
                // console.log(indexUser);
                resolve(jsonFileUsers[indexUser])
            }


        })

    })

}

const deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        js.readFile('./Data/users.json', (err, data) => {
            if (err) {
                reject(err)
            } else {
                const users = [...data.users]

                const indexUser = users.findIndex(user => user._id === id)
                // console.log(indexUser);
                users.splice(indexUser, 1)
                let newJsonFile = {
                    users: [...users]
                }
                js.writeFile('./Data/users.json', newJsonFile, err => err ? reject(err) : resolve("User Deleted In File"))

            }
        })
    })
}


const updateUser = (id, newObj) => {
    return new Promise((resolve, reject) => {
        js.readFile('./Data/users.json', (err, data) => {
            if (err) {
                reject(err)
            } else {
                const usersToUpdate = [...data.users]
                // console.log(usersToUpdate);
                const indexUser = usersToUpdate.findIndex(user => user._id === id)
                // console.log(indexUser);
                usersToUpdate[indexUser] = {
                    _id: id,
                    ...newObj
                }
                let newJsonFile = {
                    users: [...usersToUpdate]
                }
                js.writeFile('./Data/users.json', newJsonFile, err => err ? reject(err) : resolve("User updated In File"))
            }
        })
    })
}

module.exports = {
    readUsersFile,
    addUser,
    getUserById,
    deleteUser,
    updateUser
}