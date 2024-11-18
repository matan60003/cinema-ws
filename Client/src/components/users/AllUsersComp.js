import { useEffect, useState } from "react";
import UsersUtils from "../../utils/UsersUtils";
import UserComp from './UserComp'
import EditUserComp from './EditUserComp';
import axios from "axios";
import { useHistory } from 'react-router';



const AllUsersComp = (props) => {
    const history = useHistory()
    const [users, setUsers] = useState([])



    const useDeleteUserBtnFromUserComp = async (id) => { //מגדירים פונקציה שנעביר מהאבא לילד(מאול יוזרז ל יוזר קומפ)
        console.log('deleteUserFunc Initiated');
        const loggedUser = JSON.parse(sessionStorage.getItem('user'))
        const loggedUserId = loggedUser.id
        console.log(loggedUserId);
        if (loggedUserId === id) {
            //we want to delete user and back to login page for updating the user session storage data
            //1. delete from usersDB
            let deleteUserFromDb = await axios.delete(`http://localhost:8001/users/${id}`)
            deleteUserFromDb = deleteUserFromDb.data
            //2. deletePermissions
            let deleteUserFromPerms = await axios.delete(`http://localhost:8001/files2/permissionsfile/${id}`)
            deleteUserFromPerms = deleteUserFromPerms.data
            //3. deleteJSONfile
            let deleteUserFromJSONFile = await axios.delete(`http://localhost:8001/files/usersfile/${id}`)
            deleteUserFromJSONFile = deleteUserFromJSONFile.data
            history.push('/')
        } else {
            //1. delete from usersDB
            let deleteUserFromDb = await axios.delete(`http://localhost:8001/users/${id}`)
            deleteUserFromDb = deleteUserFromDb.data
            //2. deletePermissions
            let deleteUserFromPerms = await axios.delete(`http://localhost:8001/files2/permissionsfile/${id}`)
            deleteUserFromPerms = deleteUserFromPerms.data
            //3. deleteJSONfile
            let deleteUserFromJSONFile = await axios.delete(`http://localhost:8001/files/usersfile/${id}`)
            deleteUserFromJSONFile = deleteUserFromPerms.data
            let shapedData = await UsersUtils.getShapedUsers()
            setUsers(shapedData)
        }

    }




    useEffect(async () => {
        let shapedData = await UsersUtils.getShapedUsers()
        setUsers(shapedData)
        console.log(users);
    }, [])


    let userComps
    if (users) {
        userComps = users.map((user) => {
            return (
                <UserComp key={user.id} user={user} deleteBtn={useDeleteUserBtnFromUserComp} /> // מעבירים את הפונקציה שהגדרנו מהאול יוזרז ליוזר קומפ 

            )

        })
    }



    return (
        <div>
            <h1>AllUsersComp</h1>

            {userComps}

        </div>

    )


}


export default AllUsersComp;