
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


import 'antd/dist/antd.css';
import { Router } from 'react-router';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);