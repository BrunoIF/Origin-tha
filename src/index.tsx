import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { GlobalStyles, ResetStyles } from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <ResetStyles />
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
