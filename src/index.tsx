import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ResetStyles } from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <ResetStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
