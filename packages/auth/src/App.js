import React from "react";
import { Router, Route, Switch, withRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
})
export default ({ history }) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Route exact path='/auth/signin' component={Signin} />
                <Route exact path='/auth/signup' component={Signup} />
            </Router>
        </StylesProvider>
    </div>
}