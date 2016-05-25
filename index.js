import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Router, Route, hashHistory, Link } from 'react-router'

import cyclops from './reducers'
import Patterns from './containers/Patterns'


let store = createStore(cyclops);

class Main extends Component {
  constructor(props){
    super(props);
    console.log(this);
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


ReactDOM.render(<Provider store={store}>
                  <Router history={hashHistory}>
                    <Route path="/" component={Main} />
                    <Route path="/patterns" component={Patterns} />
                  </Router>
                </Provider>, document.getElementById('cyclops-react'));