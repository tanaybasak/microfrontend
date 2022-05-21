import React from "react";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import { StylesProvider } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';


export default () => {
    return <div>
        <StylesProvider>
            <Router>
                <Route exact path='/' component={Landing} />
                <Route exact path='/pricing' component={Pricing} />
            </Router>
        </StylesProvider>
    </div>
}