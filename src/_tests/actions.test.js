import { productConstants, detailsConstants, alertConstants } from '../_constants'
import * as actions from '../_actions'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const mockStore = configureMockStore([thunkMiddleware])

describe('alerts and spinners', () => {
  it('should create an action to display alert', () => {
    const text = 'Error'
    const expectedAction = {
      type: alertConstants.ERROR,
      message: text
    }
    expect(actions.alertActions.error(text)).toEqual(expectedAction)
  })

  it('should create an action to clear alert', () => {
    const expectedAction = {
      type: alertConstants.CLEAR
    }
    expect(actions.alertActions.clear()).toEqual(expectedAction)
  })

  it('should create an action to clear spinner', () => {
    const expectedAction = {
      type: productConstants.CREATE_PRODUCT_CLEAR
    }
    expect(actions.productActions.clear()).toEqual(expectedAction)
  })
})

describe('handles requests to Product API', () => {
  let values = { name: 'adidas', price: 1000, desc: 'shoe', image: 'file.txt', category: 'cars', colours: ['#fff, #000'] }
  it('should make request to create product', () => {
    const store = mockStore()
    store.dispatch(actions.productActions.submitProduct(values))
    const action = store.getActions()
    const expectedAction = {
      type: productConstants.CREATE_PRODUCT_REQUEST,
      data: values.name
    }
    expect(action[0]).toEqual(expectedAction)
  })

  it('should make request to create details', () => {
    let values = { product: {name: 'adidas', price: 1000}, desc: 'shoe', image: 'file.txt', category: 'cars', colours: ['#fff, #000'] }
    const store = mockStore()
    store.dispatch(actions.detailsActions.submitDetails(values))
    const action = store.getActions()
    const expectedAction = {
      type: detailsConstants.CREATE_DETAILS_REQUEST,
      data: values.product.name
    }
    expect(action[0]).toEqual(expectedAction)
  })
})
