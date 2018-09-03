import {
  growlAdded,
  growlRemoved,
} from '../../store/ui/actions'

import reducer from '../../store/ui'

describe('reducer', () => {
  describe('growlAdded', () => {
    it('should append the growl along with the others', () => {
      const newAlert = { message: 'testing' }
      const state = {
        growls: [{}, {}]
      }
      const newState = reducer(state, growlAdded(newAlert))

      expect(newState).toHaveProperty('growls.2', newAlert)
    })
  })

  describe('growlRemoved', () => {
    it('should set the growl at given index to `hidden`', () => {
      const msgToBeRemoved = {}
      const state = {
        growls: [{}, msgToBeRemoved]
      }
      const newState = reducer(state, growlRemoved(msgToBeRemoved))

      expect(newState.growls[1]).toHaveProperty('hidden', true)
    })
  })
})
