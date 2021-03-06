import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-progress-bar-plus/src/progress-bar.scss';
import 'assets/styles/app.scss';

const run = () => {
  ReactDOM.render(<App/>, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', run);
