import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import reducers from './reducers'

import App from './components/App.js';
import { Provider } from 'react-redux';

export const store = createStore(reducers);
store.subscribe(() => {
    console.log("store changed!", store.getState());
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)