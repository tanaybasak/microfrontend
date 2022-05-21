import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// mount function to start up the app

const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    )
}

// if we are in development and in isolation
//call mount
if (process.env.NODE_ENV == 'development') {
    const el = document.querySelector('#_marketing-dev-root');

    if (el) {
        mount(el);
    }
}


// running through container export mount

export { mount };