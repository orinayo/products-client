// ProductForm shows form for user to add input
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import ProductField from './ProductField'
import formFields from './formFields'
import { validateHex } from '../../_helpers'

class ProductForm extends Component {
  renderFields () {
    return formFields.map(({ label, name }) => {
      return (
        <Field key={name} label={label} name={name} component={ProductField} />
      )
    })
  }

  render () {
    return (
      <div className='new-input__form'>
        <form className='form' onSubmit={this.props.handleSubmit(this.props.onProductSubmit)} >
          <h2 className='new-input__heading u-margin-bottom-small'>
            Welcome to SalesFair
          </h2>
          <p className='paragraph'>
            Let's get you all set up to add your latest product for sale!
            You can add comma-separated hex color codes in the colour input field.
          </p>
          {
            this.renderFields()
          }
          <div className='new-input__btn-group'>
            <button type='button' className='btn btn-cancel' onClick={this.props.reset}>
              <span className='btn__static'>Reset</span>
            </button>
            <button className='btn btn-success'>
              <span className='btn__visible'>Ready?</span>
              <span className='btn__invisible'>Next</span>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

function validate (values) {
  const errors = {}
  errors.colours = validateHex(values.colours || '')
  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a value!`
    }
  })

  return errors
}

// Pass form and validation function to reduxForm reducer
export default reduxForm({
  validate,
  form: 'productForm',
  destroyOnUnmount: false
})(ProductForm)
