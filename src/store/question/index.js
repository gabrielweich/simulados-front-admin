import { handleActions } from 'redux-actions'
import { questionsLoaded } from './actions'

const initialState = {
  data: [],
}

const reducer = handleActions(
  {
    [questionsLoaded]: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
  initialState,
)

export const getQuestions = state => state.question.data.questions
export const getAlternatives = state => state.question.data.alternatives

export default reducer
