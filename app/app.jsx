var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

// Load foundation
$(document).foundation();

ReactDOM.render( // --> most common react dom method
  <TodoApp/>,
  document.getElementById('app')
);
