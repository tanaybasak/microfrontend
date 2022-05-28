import React, { lazy, Suspense, useState, useEffect } from 'react';

import Header from './components/Header';
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';
import Progress from './components/Progress';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

const history = createBrowserHistory();
//Container component
export default () => {
    const [isSignedIn, setSignedIn] = useState(false);

    useEffect(() => {
        if (isSignedIn)
            history.push('/dashboard');
    }, [isSignedIn])

    return <Router history={history}>
        <StylesProvider generateClassName={generateClassName}>
            <div>
                <Header onSignOut={() => setSignedIn(false)} isSignedIn={isSignedIn} />
                <Suspense fallback={<Progress />}>
                    <Switch>
                        <Route  path="/auth">
                            <AuthLazy onSignIn={() => setSignedIn(true)} />
                        </Route>
                        <Route exact path="/" component={MarketingLazy}></Route>
                        <Route path="/dashboard"  component={DashboardLazy}/>
                    </Switch>
                </Suspense>
            </div>
        </StylesProvider>
    </Router>


}