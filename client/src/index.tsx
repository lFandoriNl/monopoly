import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import reportWebVitals from './reportWebVitals';

import { ls } from './lib/local-storage';

import './normalize.css';
import './index.css';

// FYI: In dev mode, one tab === one player
if (process.env.NODE_ENV === 'development') {
  ls.setStorage(sessionStorage);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
