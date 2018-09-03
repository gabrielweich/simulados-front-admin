import { growl, growlAdded, growlRemoved } from '../../store/ui/actions'
import { GROWL_INFO } from '../../store/ui/constants'

jest.useFakeTimers()

describe('thunks', () => {
  describe('growl', () => {
    it('should hide after 5 seconds', () => {
      const getState = () => ({ ui: { growls: [] } })

      growl('')(() => {}, getState)

      expect(setTimeout).toHaveBeenCalledTimes(1)
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 5000)
    })

    it('should dispatch `growlAdded` with the given growl', () => {
      const msg = { id: 2, message: 'test', type: GROWL_INFO }
      const getState = () => ({ ui: { growls: [{}, msg] } })

      const dispatch = jest.fn()

      growl('test')(dispatch, getState)

      expect(dispatch).toHaveBeenCalledWith(growlAdded(msg))
    })

    it('should dispatch `growlAdded` and `growlRemoved`', () => {
      const msg = { id: 3, message: 'test', type: GROWL_INFO }
      const getState = () => ({ ui: { growls: [{}, growl] } })

      const dispatch = jest.fn()

      growl('test')(dispatch, getState)

      expect(dispatch).toHaveBeenCalledWith(growlAdded(msg))

      jest.runAllTimers()

      expect(dispatch).toHaveBeenCalledTimes(2)
      expect(dispatch).toHaveBeenLastCalledWith(growlRemoved(msg))
    })
  })
})
