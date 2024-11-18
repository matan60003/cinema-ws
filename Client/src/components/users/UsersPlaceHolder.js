import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import AllUsersComp from './AllUsersComp';
import AddUserComp from './AddUserComp';
import EditUserComp from './EditUserComp';



const UsersPlaceHolder = () => {
    const history = useHistory()


    const redirectToAddUserComp = () => {
        history.push("/main/users/addUser")
    }

    const redirectToAllUsersComp = async () => {
        history.push("/main/users")
    }

    return (
        <div>
            <h1>UsersPlaceHolder</h1>
            <input type="button" value="All Users" onClick={redirectToAllUsersComp} />
            <input type="button" value="Add User" onClick={redirectToAddUserComp} />
            <Switch>
                <Route exact path="/main/users" component={AllUsersComp} /> {/*  */}
                <Route path="/main/users/editUser/:id" component={EditUserComp} />
                <Route path="/main/users/addUser" component={AddUserComp} />
            </Switch>

        </div>

    )


}


export default UsersPlaceHolder;