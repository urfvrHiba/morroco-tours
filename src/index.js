import React from 'react';
import ReactDOM from 'react-dom/client';  
import App from './App.js';
import './style.css';  // Make sure this file exists, and contains Tailwind CSS imports

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.Fragment>
        <App />
    </React.Fragment>
);
