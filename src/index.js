import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAAFir7BdzwlgX0o46HCUqJDIC5TY0-axc",
  authDomain: "camada-31140-d2156.firebaseapp.com",
  projectId: "camada-31140-d2156",
  storageBucket: "camada-31140-d2156.appspot.com",
  messagingSenderId: "791435273994",
  appId: "1:791435273994:web:74c96997b23b2bb7d83cf3"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
