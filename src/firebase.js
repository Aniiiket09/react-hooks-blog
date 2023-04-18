// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC7d9OuJfKwP1NOB2ZHHGd1d6zhTO7ERWY',
  authDomain: 'react-hooks-blog-cb8f5.firebaseapp.com',
  projectId: 'react-hooks-blog-cb8f5',
  storageBucket: 'react-hooks-blog-cb8f5.appspot.com',
  messagingSenderId: '214279832460',
  appId: '1:214279832460:web:92f3514b9d636e087e4ca9',
  databaseURL: 'https://react-hooks-blog-cb8f5-default-rtdb.firebaseio.com',
};

// Initialize Firebase and exporting
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
