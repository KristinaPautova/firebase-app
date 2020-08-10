import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyACUafZzt4t3FcPFIRnzBFH_DRpUQ4Kf50",
  authDomain: "fir-test-project-9387c.firebaseapp.com",
  databaseURL: "https://fir-test-project-9387c.firebaseio.com",
  projectId: "fir-test-project-9387c",
  storageBucket: "fir-test-project-9387c.appspot.com",
  messagingSenderId: "796656504807",
  appId: "1:796656504807:web:1fd23eb2e840a81d153742"  
}

firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
