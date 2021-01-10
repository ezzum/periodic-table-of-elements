import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import store from './components/app/redux/store';

const app = (
    <Provider store = {store}>
        <App/>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));