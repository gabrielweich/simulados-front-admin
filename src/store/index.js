import { combineReducers } from 'redux'
import uiReducer from './ui'
import userReducer from './user'
import questionReducer from './question'

export default combineReducers({
  ui: uiReducer,
  question: questionReducer,
  user: userReducer,
})
