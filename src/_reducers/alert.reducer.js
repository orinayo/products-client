import { alertConstants } from '../_constants'

export function alert (state = {}, action) {
  switch (action.type) {
    case alertConstants.ERROR:
      return {
        message: action.message
      }
    case alertConstants.CLEAR:
      return {}
    default:
      return state
  }
}
