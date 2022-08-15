import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM5MSftmQIyBBc_xEkQ8symKkbt6DC6MM",
  authDomain: "web-joyas-fontan.firebaseapp.com",
  projectId: "web-joyas-fontan",
  storageBucket: "web-joyas-fontan.appspot.com",
  messagingSenderId: "297700753180",
  appId: "1:297700753180:web:19cbf6e4e4ba991c8184d9"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
 // <React.StrictMode>
    <App />
 // </React.StrictMode>
)
