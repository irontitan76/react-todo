var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');
import Login from 'Login';
import TodoApp from 'TodoApp';

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
    <Router history={hashHistory}>
      <Route path="/">
        <IndexRoute component={Login}/>
        <Route path="/todos" component={TodoApp}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
