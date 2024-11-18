import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, Link } from 'react-router-dom';




const AddUserComp = (props) => {
    const history = useHistory()
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        sessionTimeout: 0,
        viewMovies: false,
        createMovies: false,
        deleteMovies: false,
        updateMovies: false,
        viewSubscriptions: false,
        createdSubscriptions: false,
        deleteSubscriptions: false,
        updateSubscriptions: false
    })



    const saveNewUser = async () => {


        let newObjUsersDb = {
            userName: user.userName
        }
        console.log(newObjUsersDb);
        let resp2 = await axios.post(`http://localhost:8001/users/`, newObjUsersDb)
        console.log(resp2.data);

        let newObjUsersJson = {
            _id: resp2.data._id,
            firstName: user.firstName,
            lastName: user.lastName,
            isAdmin: false,
            created: new Date().toLocaleDateString(),
            sessionTimeout: user.sessionTimeout
        }
        console.log(newObjUsersJson);
        let resp = await axios.post(`http://localhost:8001/files/usersfile/`, newObjUsersJson)
        console.log(resp.data);

        let newObjPermissionsJson = {
            _id: resp2.data._id,
            permissions: [
                user.viewMovies && "View Movies",
                user.createMovies && "Create Movies",
                user.deleteMovies && "Delete Movies",
                user.updateMovies && "Update Movies",
                user.viewSubscriptions && "View Subscriptions",
                user.createdSubscriptions && "Create Subscriptions",
                user.deleteSubscriptions && "Delete Subscriptions",
                user.updateSubscriptions && "Update Subscriptions"
            ].filter(Boolean)
        }
        console.log(newObjPermissionsJson);
        let resp3 = await axios.post(`http://localhost:8001/files2/permissionsfile/`, newObjPermissionsJson)
        console.log(resp3.data);
        history.push(`/main/users`)

    }

    const cancelButton = async () => {
        history.push('/main/users')
    }
    return (
        <div>
            <h1>AddUserComp</h1>

            First Name: <input type="text" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} />    <br />
            Last Name: <input type="text" onChange={(e) => setUser({ ...user, lastName: e.target.value })} />     <br />
            User Name:  <input type="text" onChange={(e) => setUser({ ...user, userName: e.target.value })} />    <br />
            Session time out (Minutes): <input type="text" value={user.sessionTimeout} onChange={(e) => setUser({ ...user, sessionTimeout: e.target.value })} />    <br />
            Permissions:  <br />
            <input type="checkbox" checked={user.viewMovies} onChange={e => setUser({ ...user, viewMovies: e.target.checked })} /> View Movies <br />
            <input type="checkbox" checked={user.createMovies} onChange={e => setUser({ ...user, createMovies: e.target.checked })} /> Create Movies <br />
            <input type="checkbox" checked={user.deleteMovies} onChange={e => setUser({ ...user, deleteMovies: e.target.checked })} /> Delete Movies <br />
            <input type="checkbox" checked={user.updateMovies} onChange={e => setUser({ ...user, updateMovies: e.target.checked })} /> Update Movies <br />
            <input type="checkbox" checked={user.viewSubscriptions} onChange={e => setUser({ ...user, viewSubscriptions: e.target.checked })} /> View Subscriptions <br />
            <input type="checkbox" checked={user.createdSubscriptions} onChange={e => setUser({ ...user, createdSubscriptions: e.target.checked })} /> Create Subscriptions <br />
            <input type="checkbox" checked={user.deleteSubscriptions} onChange={e => setUser({ ...user, deleteSubscriptions: e.target.checked })} /> Delete Subscriptions <br />
            <input type="checkbox" checked={user.updateSubscriptions} onChange={e => setUser({ ...user, updateSubscriptions: e.target.checked })} /> Update Subscriptions <br />

            <input type="button" value="Add" onClick={saveNewUser} />
            <input type="button" value="Cancel" onClick={cancelButton} />

        </div>

    )


}


export default AddUserComp