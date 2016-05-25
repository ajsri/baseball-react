import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Router, Route, hashHistory, Link } from 'react-router'

import createLogger from 'redux-logger'

import cyclops from './reducers'
import Patterns from './containers/Patterns'

const logger = createLogger();
const store = createStore(cyclops,
                        applyMiddleware(logger));

class Main extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
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