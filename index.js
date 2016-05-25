import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Router, Route, hashHistory, Link } from 'react-router'

import Patterns from './containers/Patterns'

class Main extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to="/patterns">Patterns</Link></li>
        </ul>
      </div>
    )
  }
}



ReactDOM.render(<Router history={hashHistory}>
                  <Route path="/" component={Main} />
                  <Route path="/patterns" component={Patterns} />
                </Router>, document.getElementById('cyclops-react'));