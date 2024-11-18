const User = require('../models/userModel');




const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        User.find({}, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}


const getUsersById = (id) => {
    return new Promise((resolve, reject) => {
        User.findById(id, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}


const updateUser = (id, userObj) => {
    return new Promise((resolve, reject) => {
        User.findByIdAndUpdate(id,
            {
                userName: userObj.userName,
                password: userObj.password
            }, (err) => {
                if (err)
                    reject(err)
                else
                    resolve('User wes Succefully Updated')
            }
        )
    })
}


const deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        User.findByIdAndDelete(id, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("User deleted succefully")
            }
        })
    })
}


const addUser = (newUser) => {
    return new Promise((resolve, reject) => {
        let userNew = new User({
            userName: newUser.userName,
            password: newUser.password
        })
        userNew.save((err) => {
            err ? reject(err) : resolve(userNew)
        })
    })
}



const loginUser = (userLogin) => {
    return new Promise((resolve, reject) => {
        User.find({}, (err, data) => {
            if (err) {
                reject(err)
            } else {
                // console.log(data);
                // console.log(userLogin);
                let users = [...data]
                console.log(users);
                const checkUser = users.filter(user => user.userName === userLogin.userName && user.password === userLogin.password)
                // console.log(checkUser);
                if (checkUser.length > 0) {
                    resolve(users[0]._id)
                } else {
                    resolve(false)
                }

            }
        })
    })
}


const checkIfUserNameExistsAndUpdatePassword = (userObj) => {
    return new Promise((resolve, reject) => {
        User.find({}, async (err, data) => {
            if (err) {
                reject(err)
            } else {
                // console.log(data);
                // console.log(userObj);
                const users = [...data]
                // console.log(users);
                const index = users.findIndex(user => user.userName === userObj.userName)
                // console.log(checkUser);//הבדיקה אם אותו יוזר שהעברנו בבודי תואם למה שיש לנו במונגו 
                if (index !== -1) { // אם המשתמש תואם למה שיש לנו  במונגו, יכנס לנו למערך אובייקט  אחד וזה סימן שנכנס לנו יוזר
                    console.log("this is the password -> ", users[index].password);
                    if (users[index].password === '') {
                        await updateUser(users[index]._id, userObj)

                        resolve(true);
                    } else {
                        resolve(false)
                    }
                }
                else {
                    resolve(false);
                }

            }
        })

    })
}












module.exports = {
    getAllUsers,
    getUsersById,
    updateUser,
    deleteUser,
    addUser,
    loginUser,
    checkIfUserNameExistsAndUpdatePassword
}