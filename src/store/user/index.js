import { handleActions } from 'redux-actions'

import { userLoaded } from './actions'

const initialState = {}

const reducer = handleActions(
    {
        [userLoaded]: (state, action) => ({
            ...state,
            data: action.payload,
        }),
    },
    initialState,
)

export const getUser = state => state.user.data

export default reducer