import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router'

import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import mainReducer from './reducers'
import Main from './containers/Main'
import Gameday from './containers/Gameday'

const logger = createLogger();
const store = createStore(mainReducer,
                applyMiddleware(thunk, logger));




ReactDOM.render(<Provider store={store}>
                  <Router history={hashHistory}>
                    <Route path="/" component={Gameday} />
                    <Route path="/g" component={Main} />
                  </Router>
                </Provider>, document.getElementById('razgriz'));