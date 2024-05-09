import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

console.log("hello from index.js");
ReactDOM.render(React.createElement(App), document.getElementById('root'));
console.log("rendered app");

