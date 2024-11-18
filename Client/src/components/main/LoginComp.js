import axios from "axios";
import { useState } from "react";
import { useHistory, Link } from 'react-router-dom';
import UsersUtils from "../../utils/UsersUtils";


const LoginComp = (props) => {
    const history = useHistory()
    const [user, setUser] = useState({ userName: '', password: '' })


    const checkUser = async () => {
        let resp = await axios.post('http://localhost:8001/users/login', user)
        console.log(resp.data);
        if (resp.data === false) {
            alert("User not found")
        }
        else {
            // let resp2 = await axios.get(`http://localhost:8001/users/${resp.data}`)
            let user = await UsersUtils.getShapedUser(resp.data)
            console.log(user);
            sessionStorage.setItem("user", JSON.stringify(user)) //העברנו לסטורג' את כל האובייקט יוזר , השתמשנו בג'ייסון סטירנגיפי על מנת להמיר את האובייקט לג'ייסון כי אנחנו מעבירים את האובייקט לסטורג'
            history.push("/main")

        }
    }

    return (
        <div>


            <h1>LoginComp</h1>
            Username: <input type="text" value={user.userName} onChange={e => setUser({ ...user, userName: e.target.value })} /> <br />
            Password: <input type="text" value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} /> <br />
            <input type="button" value="Login" onClick={checkUser} /> <br />
            New User ? <Link to='/createAccount'> Create Account  </Link>


        </div>

    )


}


export default LoginComp;



