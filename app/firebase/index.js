import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA9YCA34UvraegdyfAx_BeiQ03dTxJVpMw",
    authDomain: "sheppard-todo-app.firebaseapp.com",
    databaseURL: "https://sheppard-todo-app.firebaseio.com",
    storageBucket: "sheppard-todo-app.appspot.com",
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
