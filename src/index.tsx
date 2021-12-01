import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/database';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
	apiKey: 'AIzaSyBOCXwvArghT_m0Jlxhaok7yUOU_sg4Wzo',
	authDomain: 'garmen-cipete.firebaseapp.com',
	databaseURL:
		'https://garmen-cipete-default-rtdb.asia-southeast1.firebasedatabase.app',
	projectId: 'garmen-cipete',
	storageBucket: 'garmen-cipete.appspot.com',
	messagingSenderId: '928613970672',
	appId: '1:928613970672:web:515ffdc845c6f7cd2cc835',
	measurementId: 'G-SNN3YJL6CK',
};
const fb = firebase.initializeApp(firebaseConfig);

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
