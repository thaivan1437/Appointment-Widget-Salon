import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as Sentry from '@sentry/browser';
import "core-js/es6/set"
import "core-js/es6/map";
import "raf/polyfill";
import 'core-js/es6/string';


Sentry.init({dsn: "https://cb9595338c8a4f559e9006bb42caac3f@sentry.io/1468398"});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
