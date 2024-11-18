import { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';


const CreateAccountComp = (props) => {
    const history = useHistory()
    const [user, setUser] = useState({ userName: '', password: '' })

    const checkUserName = async () => {
        let resp = await axios.post('http://localhost:8001/users/userExist', user)
        console.log(resp.data);
        if (resp.data === false) {
            alert("The user doesn't exist in the system")
        } else {
            history.push('/')
        }
    }

    return (
        <div>
            <h1>CreateAccountComp</h1>
            Username: <input type="text" value={user.userName} onChange={e => setUser({ ...user, userName: e.target.value })} /> <br />
            Password: <input type="text" value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} /> <br />
            <input type="button" value="Create" onClick={checkUserName} /> <br />
        </div>

    )


}


export default CreateAccountComp;