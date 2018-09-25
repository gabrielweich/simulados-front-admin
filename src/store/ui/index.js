import { handleActions } from 'redux-actions'

import { growlAdded, growlRemoved, openSidebar, closeSidebar, toggleSidebar } from './actions'

const initialState = {
  growls: [],
  sidebarOpen: true,
}

const hideAllGrowls = growls => growls.map(
  g => ({ ...g, hidden: true })
)

const hideGrowl = (target, growls) => growls.map(
  g => g === target
    ? ({ ...g, hidden: true })
    : g
)

const setSidebarOpen = to => state => ({
  ...state,
  sidebarOpen: to
})

const reducer = handleActions({
  [growlAdded]: (state, action) => ({
    ...state,
    growls: [
      ...hideAllGrowls(state.growls),
      action.payload,
    ],
  }),
  [growlRemoved]: (state, action) => ({
    ...state,
    growls: hideGrowl(action.payload, state.growls),
  }),
  [openSidebar]: setSidebarOpen(true),
  [closeSidebar]: setSidebarOpen(false),
  [toggleSidebar]: state => setSidebarOpen(!state.sidebarOpen)(state),
}, initialState)

export const getGrowls = state => state.ui.growls
export const isSidebarOpen = state => state.ui.sidebarOpen

export default reducer
