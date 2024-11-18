import { Switch, Route } from 'react-router-dom';
import SubscriptionsComp from "../members/SubscriptionsComp";

import UsersPlaceHolder from '../users/UsersPlaceHolder';

import { useHistory } from 'react-router-dom';
import MoviesPlaceHolder from '../movies/MoviesPlaceHolder';

const MainComp = () => {
    const history = useHistory()
    let currentUser = JSON.parse(sessionStorage.getItem('user')) // מגדירים משתנה שיקח את האובייקט וימיר אותו לאובייקט סקריפטי , גט אייטם מביא לי את האובייקט מהסטורג
    console.log(currentUser);


    const redirectToMoviesComp = () => {
        history.push("/main/movies")
    }

    const redirectToUsersComp = () => {
        history.push("/main/users")
    }

    const redirectToSubsComp = () => {
        history.push("/main/subscriptions")
    }

    // let deleteCurrentUser = JSON.parse(sessionStorage.clear('user'))
    const logOutUser = () => {
        sessionStorage.removeItem('user')
        history.push("/")
    }

    return (
        <div>
            <h1>MainComp</h1>

            {currentUser.permissions.includes('View Movies') && <input type="button" value="Movies" onClick={redirectToMoviesComp} />} {/* אם המערך מכיל (אינקלודס) ויאו מוביז, תציג לנו כפתור */}
            {currentUser.isAdmin && <input type="button" value="Users Management" onClick={redirectToUsersComp} />}  {/* שורט איף, אם איז אדמין טורסי, יוצג לנו כפתור */}
            {currentUser.permissions.includes('View Subscriptions') && <input type="button" value="Subscriptions" onClick={redirectToSubsComp} />}
            <input type="button" value="Log Out" onClick={logOutUser} />


            <Switch>
                <Route path="/main/movies" component={MoviesPlaceHolder} />
                <Route path="/main/subscriptions" component={SubscriptionsComp} />
                <Route path="/main/users" component={UsersPlaceHolder} />
            </Switch>

        </div>

    )


}


export default MainComp;