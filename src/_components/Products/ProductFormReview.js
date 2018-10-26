import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import formFields from './formFields'

function mapStateToProps ({ form, product, alert }) {
  return {
    formValues: form.productForm.values,
    saving: product.saving,
    alert
  }
}

const ProductFormReview = ({ onCancel, formValues, onSubmitForm, onClearAlert, saving, alert }) => {
  const reviewFields = formFields.map(({ label, name }) => {
    return (
      <div className='form-review__group' key={label}>
        <label className='form-review__label'>
          {label}
        </label>
        <div className='form-review__text'>
          {formValues[name][0].name || formValues[name]}
        </div>
      </div>
    )
  })

  return (
    <div className='form-review'>
      {alert.message &&
        <div className='alert'>
          <span className='alert-text'>{alert.message}</span>
          <span className='closebtn' onClick={() => onClearAlert()}>&times;</span>
        </div>
      }
      <h5 className='new-input__heading u-margin-bottom-small'>
        Please confirm your entries
      </h5>
      <div>
        {
          reviewFields
        }
      </div>
      <div className='new-input__btn-group'>
        <button type='button' className='btn btn-cancel' onClick={onCancel}>
          <span className='btn__static'>Back</span>
        </button>
        {saving &&
          <img alt='spinner' src='data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==' />
        }
        <button className='btn btn-success' onClick={() => onSubmitForm(formValues)}>
          <span className='btn__visible'>Ready?</span>
          <span className='btn__invisible'>Save Product</span>
        </button>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(withRouter(ProductFormReview))
