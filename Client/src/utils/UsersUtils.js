import axios from "axios";
import AxiosUtils from "./AxiosUtils";

const getShapedUser = async (id) => {
    const usersJson = await axios.get(`http://localhost:8001/files/usersfile/${id}`)
    const json = usersJson.data;

    const permissionsJson = await axios.get(`http://localhost:8001/files2/permissionsfile/${id}`)
    const permissions = permissionsJson.data;

    const usersDB = await axios.get(`http://localhost:8001/users/${id}`)
    const userDB = usersDB.data;

    let userObj = {
        id: userDB._id,
        userName: userDB.userName,
        firstName: json.firstName,
        lastName: json.lastName,
        isAdmin: json.isAdmin,
        created: json.created,
        sessionTimeout: json.sessionTimeout,
        permissions: permissions.permissions
    }
    return userObj

}

// const getShapedUsers = async () => {
//     const usersJson = await AxiosUtils.getAll('http://localhost:8001/files/usersfile')
//     const jsons = usersJson.data;

//     const permissionsJson = await AxiosUtils.getAll('http://localhost:8001/files2/permissionsfile')
//     const permissions = permissionsJson.data;

//     const usersDB = await AxiosUtils.getAll('http://localhost:8001/users')
//     const userDB = usersDB.data;


//     let shapedUsers = userDB.map(user => {
//         user.userJson = []
//         user.permissionsJson = []

//         jsons.forEach(json => {
//             if (json._id === user._id) {
//                 let obj = {
//                     firstName: json.firstName,
//                     lastName: json.lastName,
//                     created: json.created,
//                     sessionTimeout: json.sessionTimeout
//                 }
//                 user.userJson.push(obj)
//             }

//         });

//         permissions.forEach(permission => {
//             if (permission._id === user._id) {
//                 let obj = {
//                     permissions: permission.permissions
//                 }
//                 user.permissionsJson.push(obj)
//             }
//         })
//         return user;
//     })


//     return shapedUsers;

// }
const getShapedUsers = async () => {
    let users = []
    let userDbData = await AxiosUtils.getAll('http://localhost:8001/users')
    userDbData = userDbData.data

    let jsonData = await AxiosUtils.getAll('http://localhost:8001/files/usersfile')
    jsonData = jsonData.data

    let permissionsData = await AxiosUtils.getAll('http://localhost:8001/files2/permissionsfile')
    permissionsData = permissionsData.data



    for (let i = 0; i < userDbData.length; i++) {
        let shapedUserData = {
            id: '',
            userName: '',
            password: '',
            firstName: '',
            lastName: '',
            sessionTimeOut: 0,
            createdDate: '',
            permissions: []

        }
        shapedUserData.id = userDbData[i]._id
        shapedUserData.userName = userDbData[i].userName
        shapedUserData.password = userDbData[i].password

        for (let i = 0; i < permissionsData.length; i++) {
            if (permissionsData[i]._id === shapedUserData.id) {
                // console.log(permissionsData[i]._id);
                shapedUserData.permissions = permissionsData[i].permissions
            }
        }
        for (let i = 0; i < jsonData.length; i++) {
            if (jsonData[i]._id === shapedUserData.id) {
                shapedUserData.firstName = jsonData[i].firstName
                shapedUserData.lastName = jsonData[i].lastName
                shapedUserData.sessionTimeOut = jsonData[i].sessionTimeout
                shapedUserData.createdDate = jsonData[i].created
            }
        }
        users.push(shapedUserData)
    }
    console.log(users);
    return users.slice(1)
}


// const usersUtils = { getShapedUser }
export default {
    getShapedUser,
    getShapedUsers
};
