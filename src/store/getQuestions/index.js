import { handleActions } from 'redux-actions'

import { questionsLoaded } from './actions'
import { userLogout } from '../user/actions'

const initialState = {
  questions: [],
}

const reducer = handleActions(
  {
    [questionsLoaded]: (state, action) => ({
      ...state,
      questions: action.payload,
    }),
    [userLogout]: state => ({
      ...state,
      questions: [],
    }),
  },
  initialState,
)

export const getQuestions = state => state.question.questions

export default reducer
