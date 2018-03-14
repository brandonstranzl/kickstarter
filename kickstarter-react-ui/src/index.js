// Application entrypoint.

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';

// Load up the application styles
// require("../styles/application.scss");
import './styles/App.css';

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.js';

//what does this do?
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>,
  document.getElementById('root')
  );
registerServiceWorker();
