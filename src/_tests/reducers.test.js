import { productConstants, detailsConstants, alertConstants } from '../_constants'
import { product } from '../_reducers/product.reducer'
import { details } from '../_reducers/details.reducer'
import { alert } from '../_reducers/alert.reducer'

const initialState = {}

describe('alertReducers', () => {
  it('should return the initial state', () => {
    expect(alert(undefined, {})).toEqual(initialState)
  })

  it('should handle alert ERROR', () => {
    expect(alert(initialState, {
      type: alertConstants.ERROR,
      message: 'error'
    })).toEqual({ message: 'error' })
  })

  it('should handle alert CLEAR', () => {
    expect(alert(initialState, {
      type: alertConstants.CLEAR
    })).toEqual({})
  })
})

describe('detailsReducer', () => {
  it('should return the initial state', () => {
    expect(details(undefined, {})).toEqual(initialState)
  })

  it('should handle CREATE_DETAILS_REQUEST', () => {
    expect(details(initialState, {
      type: detailsConstants.CREATE_DETAILS_REQUEST,
      data: 'adidas'
    })).toEqual({
      saving: true,
      details: 'adidas'
    })
  })

  it('should handle CREATE_DETAILS_SUCCESS', () => {
    expect(details(initialState, {
      type: detailsConstants.CREATE_DETAILS_SUCCESS,
      data: {
        product: {
          name: 'adidas',
          price: 1000,
          _id: 12345
        },
        _id: 4567,
        description: 'shoe',
        imageId: 'abc123',
        image: 'www.cloudinary/img/url',
        category: 'cars',
        colours: ['#fff, #000']
      }
    })).toEqual({
      details: {
        product: {
          name: 'adidas',
          price: 1000,
          _id: 12345
        },
        _id: 4567,
        description: 'shoe',
        imageId: 'abc123',
        image: 'www.cloudinary/img/url',
        category: 'cars',
        colours: ['#fff, #000']
      }
    })
  })
})

describe('productReducer', () => {
  it('should return the initial state', () => {
    expect(product(undefined, {})).toEqual(initialState)
  })

  it('should handle CREATE_PRODUCT_REQUEST', () => {
    expect(product(initialState, {
      type: productConstants.CREATE_PRODUCT_REQUEST,
      data: 'adidas'
    })).toEqual({
      saving: true,
      product: 'adidas'
    })
  })

  it('should handle CREATE_PRODUCT_SUCCESS', () => {
    expect(product(initialState, {
      type: productConstants.CREATE_PRODUCT_SUCCESS,
      data: {
        name: 'adidas',
        price: 1000,
        _id: 12345
      }
    })).toEqual({
      saving: true,
      product: {
        name: 'adidas',
        price: 1000,
        _id: 12345
      }
    })
  })

  it('should handle CREATE_PRODUCT_CLEAR', () => {
    expect(product(initialState, {
      type: productConstants.CREATE_PRODUCT_CLEAR
    })).toEqual({
      state: {}
    })
  })
})
