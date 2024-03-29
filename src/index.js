import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import * as serviceWorker from './serviceWorker';

console.log('Hello World from Whom')

const store = configureStore()

store.subscribe(() => {
    console.log(store.getState())
})

console.log(store.getState())

const app = (
    <Provider store={store}>
        <App></App>
    </Provider>
)


ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
