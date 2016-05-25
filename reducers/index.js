import { combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import patterns from './patterns'

const cyclops = combineReducers({
  patterns,
  routing: routerReducer
})

export default cyclops