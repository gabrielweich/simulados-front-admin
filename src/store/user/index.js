import { handleActions } from 'redux-actions'

import { userLoaded, userLogout } from './actions'

let initialState = {}

const reducer = handleActions(
  {
    [userLoaded]: (state, action) => ({
      ...state,
      data: action.payload,
    }),
    [userLogout]: state => ({
      ...state,
      data: {},
    }),
  },
  initialState,
)

export const getData = state => state.user.data

export const getStudent = state => state.user.data.data.user

export const isAuth = state => !!state.user.data && state.user.data.success

export default reducer
