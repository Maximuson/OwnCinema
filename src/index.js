import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, { subscribe } from './redux/state';

let rerenderEntireTree = (state) => {
ReactDOM.render(<App state={state}/>, document.getElementById('root'));

}
subscribe(rerenderEntireTree);

rerenderEntireTree(state)

serviceWorker.unregister();
