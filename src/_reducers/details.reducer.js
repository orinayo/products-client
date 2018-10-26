import { detailsConstants } from '../_constants'

export function details (state = {}, action) {
  switch (action.type) {
    case detailsConstants.CREATE_DETAILS_REQUEST:
      return {
        saving: true,
        details: action.data
      }
    case detailsConstants.CREATE_DETAILS_SUCCESS:
      return {
        details: action.data
      }
    default:
      return state
  }
}
