import { combineReducers } from 'redux'
import { product } from './product.reducer'
import { details } from './details.reducer'
import { alert } from './alert.reducer'
import { reducer as reduxForm } from 'redux-form'

const rootReducer = combineReducers({
  product,
  details,
  alert,
  form: reduxForm
})

export default rootReducer
