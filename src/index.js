import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App.js';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'));

// ReactDom is the object defined as the same name if it's a default export or
// changed here if it's named export.
// <App/> is the JSX being rendered to the "root" div (appended in <div class="root"></div>).
// "root" is in the only HTML page being loaded in SPA available in public > index.html
// ##############################
// Setting up Github Pages.
// ##############################
