import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { ValContext } from './context/Valcontext';

ReactDOM.render(
  <React.StrictMode>
    <ValContext>
      <App />
    </ValContext>

  </React.StrictMode>,
  document.getElementById('root')
);


