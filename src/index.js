import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase";
import "firebase/firestore";
import reportWebVitals from './reportWebVitals';

// const firebase = require('firebase')
// require('firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyA0rqiPS1iQ2jAM2oVLJPKd4nQVBrJnsvE",
    authDomain: "evernote-app-42a44.firebaseapp.com",
    projectId: "evernote-app-42a44",
    storageBucket: "evernote-app-42a44.appspot.com",
    messagingSenderId: "271265959466",
    appId: "1:271265959466:web:07d443a17b232871ac3d53"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


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

