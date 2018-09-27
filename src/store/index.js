import { combineReducers } from 'redux'
import uiReducer from './ui'
import questionReducer from './question'

export default combineReducers({
  ui: uiReducer,
  question: questionReducer
})
