// ProductNew shows ProductForm and ProductFormReview
import React, { Component } from 'react'
import ProductForm from './ProductForm'
import ProductFormReview from './ProductFormReview'
import { reduxForm } from 'redux-form'
import { productActions, alertActions } from '../../_actions'

class ProductNew extends Component {
  state = { showFormReview: false }

  onSubmitForm = (formValues) => {
    const { dispatch } = this.props
    dispatch(productActions.submitProduct(formValues))
  }

  onClearAlert = () => {
    const { dispatch } = this.props
    dispatch(alertActions.clear())
  }
  
  onCancel = () => {
    const { dispatch } = this.props
    this.setState({
      showFormReview: false
    })
    dispatch(alertActions.clear())
    dispatch(productActions.clear())
  }

  renderContent () {
    if (this.state.showFormReview) {
      return (
      <ProductFormReview
        onCancel={this.onCancel}
        onSubmitForm={this.onSubmitForm}
        onClearAlert={this.onClearAlert}
        />
      )
    }

    return (
      <ProductForm 
        onProductSubmit={() => this.setState({
          showFormReview: true
        })} 
      />
    )
  }

  render () {
    return (
      <div className='new-input'>
        {
          this.renderContent()
        }
      </div>
    )
  }
}

// Clear form values if not on Product component
export default reduxForm({
  form: 'productForm'
})(ProductNew)
