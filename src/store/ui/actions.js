import { delay } from 'redux-saga'
import { createAction } from 'redux-actions'

import * as constants from './constants'

import sequence from 'utils/sequence'

const idSeq = sequence()

const growlAdded = createAction('GROWL_ADDED')
const growlRemoved = createAction('GROWL_REMOVED')
const openSidebar = createAction('OPEN_SIDEBAR')
const closeSidebar = createAction('CLOSE_SIDEBAR')
const toggleSidebar = createAction('TOGGLE_SIDEBAR')

const growl = (text, type = constants.GROWL_INFO) => dispatch => {
  const message = {
    type,
    message: text,
    id: idSeq.next(),
  }

  dispatch(growlAdded(message))
  setTimeout(
    () => dispatch(
      growlRemoved(message)
    ), 1000 * 5
  )
}

export {
  growlAdded,
  growlRemoved,
  growl,
  openSidebar,
  closeSidebar,
  toggleSidebar,
}
