import { combineReducers } from 'redux'
import uiReducer from './ui'
import userReducer from './user'
<<<<<<< HEAD
import questionReducer from './question'

export default combineReducers({
  ui: uiReducer,
  question: questionReducer,
=======

export default combineReducers({
  ui: uiReducer,
>>>>>>> 408512ed8bb786ebec4f82060c79df9bf075be54
  user: userReducer
})
