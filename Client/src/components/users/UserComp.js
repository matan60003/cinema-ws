import { useState } from "react"
import { useHistory, Link } from 'react-router-dom';
import EditUserComp from './EditUserComp';




const UserComp = (props) => {
    const [user, setUser] = useState({})





    return (
        <div style={{ border: ' 1px solid black' }}>
            <h1>UserComp</h1>
            Name: {`${props.user.firstName} ${props.user.lastName}`} <br />
            User Name: {props.user.userName} <br />
            Session time out(minutes): {`${props.user.sessionTimeOut / 60}`} <br />
            created Date: {props.user.createdDate} <br />
            Permissions: {props.user.permissions.slice(0, props.user.permissions.length).join(',')} <br />
            <button> <Link to={`/main/users/editUser/${props.user.id}`}> Edit  </Link> </button>
            <button onClick={e => props.deleteBtn(props.user.id)}> <Link to='/main/users'> Delete  </Link> </button>

        </div>

    )


}


export default UserComp;