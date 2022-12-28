import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); //index.html div#root -> document.getElementById를 이용하여 찾아온다.
root.render(
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  </React.StrictMode>
);

// jsx 태그 = js안에서 xml태그(html태그)를 사용할 수 있도록 지원 -> import React from 'react';
// <App /> = import App from './App';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); // 웹 퍼포먼스 측정 위한 js 라이브러리
