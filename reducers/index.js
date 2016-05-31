import { combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { gameday } from './gameday'

const mainReducer = combineReducers({
  gameday,
  routing: routerReducer
})

export default mainReducer