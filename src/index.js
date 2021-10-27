import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App.js';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDom is the object defined as the same name if it's a named export or
// changed here if it's default export.
// <App/> is the JSX being rendered to the "root" div (appended in <div class="root"></div>).
// "root" is in the only HTML page being loaded in SPA available in public > index.html
