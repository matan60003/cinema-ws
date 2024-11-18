import { Switch, Route } from 'react-router-dom';
import LoginComp from './LoginComp';
import MainComp from './MainComp';
import CreateAccountComp from './CreateAccountComp';


function MainPlaceHolder() {
    return (
        <div >

            <Switch>
                <Route exact path="/" component={LoginComp} />
                <Route path="/main" component={MainComp} />
                <Route path="/createAccount" component={CreateAccountComp} />
            </Switch>


        </div>
    );
}

export default MainPlaceHolder;
