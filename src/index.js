import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-raleway';
import 'font-awesome/css/font-awesome.min.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
    // return null;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
