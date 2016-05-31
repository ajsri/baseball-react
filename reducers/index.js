import { combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { main } from './main'

const mainReducer = combineReducers({
  main: main,
  routing: routerReducer
})

export default mainReducer