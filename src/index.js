// Enables JSX
import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ToDo from './ToDo';
import HW from './components/HW';
import UL from './components/UL';
import MyInfo from './components/MyInfo';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(What do you want to render, where do you want to render it)
// ReactDOM.render(<App />, document.getElementById('root'));

// To Do List
ReactDOM.render(<ToDo />, document.getElementById('root'));

// Hello World
// ReactDOM.render(<HW />, document.getElementById('root'));

// Unordered List
// ReactDOM.render(<UL />, document.getElementById('root'));

// MyInfo Blurb
// ReactDOM.render(<MyInfo />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
