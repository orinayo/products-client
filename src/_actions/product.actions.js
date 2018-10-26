import { productConstants, errorMessages } from '../_constants'
import { productService } from '../_services'
import { alertActions, detailsActions } from './'

const submitProduct = values => async dispatch => {
  const { name, price, desc, image, category, colours } = values
  dispatch({
    type: productConstants.CREATE_PRODUCT_REQUEST,
    data: name
  })

  try {
    let res = await productService.submitProduct({ name, price })
    const { product } = res.data
    dispatch({
      type: productConstants.CREATE_PRODUCT_SUCCESS,
      data: product
    })
    dispatch(detailsActions.submitDetails({ desc, category, image, colours, product }))
  } catch (err) {
    dispatch(alertActions.error(errorMessages.PRODUCT_ERROR_MESSAGE))
  }
}

const clear = () => {
  return { type: productConstants.CREATE_PRODUCT_CLEAR }
}

export const productActions = {
  submitProduct,
  clear
}
