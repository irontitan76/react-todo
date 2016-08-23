var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var {hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');
import firebase from 'app/firebase/';
import router from 'app/router/';

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    hashHistory.push('/todos');
  } else {
    hashHistory.push('/');
  }
});

// LOCAL STORAGE
// store.subscribe(() => {
//   var state = store.getState();
//   console.log('New state', state);
//   TodoAPI.setTodos(state.todos);
// });

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());

// Load Foundation CSS Framework
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={ store }>
    {router}
  </Provider>,
  document.getElementById('app')
);
