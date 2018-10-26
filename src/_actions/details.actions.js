import { detailsConstants, errorMessages } from '../_constants'
import { detailService } from '../_services'
import { alertActions } from './'
import { history } from '../_helpers'

const submitDetails = values => async dispatch => {
  const { desc, category, image, colours, product } = values
  dispatch({
    type: detailsConstants.CREATE_DETAILS_REQUEST,
    data: product.name
  })

  try {
    let res = await detailService.submitDetails({ desc, category, image, colours }, product._id)
    const { detail } = res.data
    dispatch({
      type: detailsConstants.CREATE_DETAILS_SUCCESS,
      data: detail
    })
    history.push(`/products/${detail.product}/details`)
  } catch (err) {
    dispatch(alertActions.error(errorMessages.DETAILS_ERROR_MESSAGE))
  }
}

export const detailsActions = {
  submitDetails
}
