import { useEffect, useState } from "react";
import { useHistory, Link } from 'react-router-dom';
import UsersUtils from "../../utils/UsersUtils";
import axios from "axios";


const EditUserComp = (props) => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        sessionTimeout: 0,
        created: '',
        viewMovies: false,
        createMovies: false,
        deleteMovies: false,
        updateMovies: false,
        viewSubscriptions: false,
        createdSubscriptions: false,
        deleteSubscriptions: false,
        updateSubscriptions: false
    })


    useEffect(async () => {
        console.log(props.match.params.id);
        let shapedData = await UsersUtils.getShapedUser(props.match.params.id)
        shapedData.permissions.includes("View Movies") ? shapedData.viewMovies = true : shapedData.viewMovies = false
        shapedData.permissions.includes("Create Movies") ? shapedData.createMovies = true : shapedData.createMovies = false
        shapedData.permissions.includes("Delete Movies") ? shapedData.deleteMovies = true : shapedData.deleteMovies = false
        shapedData.permissions.includes("Update Movies") ? shapedData.updateMovies = true : shapedData.updateMovies = false
        shapedData.permissions.includes("View Subscriptions") ? shapedData.viewSubscriptions = true : shapedData.viewSubscriptions = false
        shapedData.permissions.includes("Create Subscriptions") ? shapedData.createdSubscriptions = true : shapedData.createdSubscriptions = false
        shapedData.permissions.includes("Delete Subscriptions") ? shapedData.deleteSubscriptions = true : shapedData.deleteSubscriptions = false
        shapedData.permissions.includes("Update Subscriptions") ? shapedData.updateSubscriptions = true : shapedData.updateSubscriptions = false

        setUser(shapedData)
        console.log(user);
    }, [])


    const updateData = async () => {
        let objUsersJson = {
            firstName: user.firstName,
            lastName: user.lastName,
            isAdmin: false,
            created: user.created,
            sessionTimeout: user.sessionTimeout
        }
        console.log(objUsersJson);
        let resp = await axios.put(`http://localhost:8001/files/usersfile/${props.match.params.id}`, objUsersJson)
        console.log(resp.data);

        let objPermissionsJson = {
            _id: props.match.params.id,
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
        console.log(objPermissionsJson);
        let resp2 = await axios.put(`http://localhost:8001/files2/permissionsfile/${props.match.params.id}`, objPermissionsJson)
        console.log(resp2.data);


        let objUsersDb = {
            userName: user.userName
        }
        console.log(objUsersDb);
        let resp3 = await axios.put(`http://localhost:8001/users/${props.match.params.id}`, objUsersDb)
        console.log(resp3.data);
    }

    return (
        <div >
            <h1>EditUserComp</h1>
            First Name: <input type="text" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} />    <br />
            Last Name: <input type="text" value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} />     <br />
            User Name:  <input type="text" value={user.userName} onChange={(e) => setUser({ ...user, userName: e.target.value })} />    <br />
            Session time out (Minutes): <input type="text" value={`${user.sessionTimeout}`} onChange={(e) => setUser({ ...user, sessionTimeout: e.target.value })} />    <br />
            Created data:  <span> {user.created} </span>    <br />
            Permissions:  <br />
            <input type="checkbox" checked={user.viewMovies} onChange={e => setUser({ ...user, viewMovies: e.target.checked })} /> View Movies <br />
            <input type="checkbox" checked={user.createMovies} onChange={e => setUser({ ...user, createMovies: e.target.checked })} /> Create Movies <br />
            <input type="checkbox" checked={user.deleteMovies} onChange={e => setUser({ ...user, deleteMovies: e.target.checked })} /> Delete Movies <br />
            <input type="checkbox" checked={user.updateMovies} onChange={e => setUser({ ...user, updateMovies: e.target.checked })} /> Update Movies <br />
            <input type="checkbox" checked={user.viewSubscriptions} onChange={e => setUser({ ...user, viewSubscriptions: e.target.checked })} /> View Subscriptions <br />
            <input type="checkbox" checked={user.createdSubscriptions} onChange={e => setUser({ ...user, createdSubscriptions: e.target.checked })} /> Create Subscriptions <br />
            <input type="checkbox" checked={user.deleteSubscriptions} onChange={e => setUser({ ...user, deleteSubscriptions: e.target.checked })} /> Delete Subscriptions <br />
            <input type="checkbox" checked={user.updateSubscriptions} onChange={e => setUser({ ...user, updateSubscriptions: e.target.checked })} /> Update Subscriptions <br />


            <button onClick={updateData}> <Link to='/main/users'> Update  </Link> </button>
            <button> <Link to='/main/users'> Cancel  </Link> </button>

        </div>

    )


}


export default EditUserComp;