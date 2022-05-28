import React from "react";
import { Router, Route, Switch, withRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
})
export default ({ history, onSignIn }) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Route exact path='/auth/signin'>
                    <Signin onSignIn={onSignIn} />
                </Route>
                <Route exact path='/auth/signup'>
                    <Signup onSignIn={onSignIn} />
                </Route>
            </Router>
        </StylesProvider>
    </div>
}