import { productConstants } from '../_constants'

export function product (state = {}, action) {
  switch (action.type) {
    case productConstants.CREATE_PRODUCT_REQUEST:
      return {
        saving: true,
        product: action.data
      }
    case productConstants.CREATE_PRODUCT_SUCCESS:
      return {
        saving: true,
        product: action.data
      }
    case productConstants.CREATE_PRODUCT_CLEAR:
      return {
        state
      }
    default:
      return state
  }
}
