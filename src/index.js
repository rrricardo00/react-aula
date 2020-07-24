import './index.css'
import ReactDom from 'react-dom';
import React from 'react';
import App from './App';

const element = document.querySelector("#root");
ReactDom.render(
    <App></App>
    , element);