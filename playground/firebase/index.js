import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA9YCA34UvraegdyfAx_BeiQ03dTxJVpMw",
  authDomain: "sheppard-todo-app.firebaseapp.com",
  databaseURL: "https://sheppard-todo-app.firebaseio.com",
  storageBucket: "sheppard-todo-app.appspot.com",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Ross',
    age: 24
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Clean the house'
});

todosRef.push({
  text: 'Mow the yard'
});
