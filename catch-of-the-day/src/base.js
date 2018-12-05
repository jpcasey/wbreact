import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBYhLGQkIeyJYu9Wrn9xGQevLcYr5ECJio",
  authDomain: "catch-of-the-day-jpcasey.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-jpcasey.firebaseio.com",
  projectId: "catch-of-the-day-jpcasey",
  storageBucket: "catch-of-the-day-jpcasey.appspot.com",
  messagingSenderId: "262711036875"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;