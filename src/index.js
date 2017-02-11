import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory, browserHistory } from 'react-router';


ReactDOM.render(
  (<Router history={browserHistory}>
    <Route path="/index" component={App}/>
    <Route path="/" component={App}/>
  </Router>)
  ,document.getElementById('root')
);
