import React, { lazy, Suspense, useState } from 'react';

import Header from './components/Header';
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Progress from './components/Progress';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})
//Container component
export default () => {
    const [isSignedIn, setSignedIn] = useState(false);
    return <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
            <div>
                <Header onSignOut={() => setSignedIn(false)} isSignedIn={isSignedIn} />
                <Suspense fallback={<Progress />}>
                    <Switch>
                        <Route path="/auth">
                            <AuthLazy onSignIn={() => setSignedIn(true)} />
                        </Route>
                        <Route path="/" component={MarketingLazy}></Route>
                    </Switch>
                </Suspense>
            </div>
        </StylesProvider>
    </BrowserRouter>


}