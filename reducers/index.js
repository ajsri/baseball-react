import { combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const mainReducer = combineReducers({
  routing: routerReducer
})

export default mainReducer