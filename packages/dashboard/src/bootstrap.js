import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// mount function to start up the app

const mount = (el) => {

    const app = createApp(Dashboard);
    app.mount(el);

}

// if we are in development and in isolation
//call mount
if (process.env.NODE_ENV == 'development') {
    const el = document.querySelector('#_dashboard-dev-root');

    if (el) {
        mount(el);
    }
}


// running through container export mount

export { mount };