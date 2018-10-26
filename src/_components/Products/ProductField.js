// ProductField contains logic to render a single label and text input
import React, { Component } from 'react'
import Icon from '../Icon/Icon'

class ProductField extends Component {
  state = { previewImgUrl: '', fileName: 'No file was chosen' }

  handleChange = (event) => {
    const file = event.target.files[0]
    console.log(file)
    if (!file) {
      return
    }

    this.generatePreviewImgUrl(file, previewImgUrl => {
      this.setState({ previewImgUrl, fileName: file.name })
    })
  }

  generatePreviewImgUrl = (file, callback) => {
    const reader = new FileReader()
    const url = reader.readAsDataURL(file)
    reader.onloadend = e => callback(reader.result)
  }

  renderInput (label, input) {
    switch (label) {
      case 'Image':
        return [
          this.state.previewImgUrl &&
            <div className='form__box' key='0'>
              <img src={this.state.previewImgUrl} alt='Preview' className='form__photo' />
            </div>,
          <input 
            {...input}
            id={label}
            key='1'
            className='form__inputfile'
            accept='image/*'
            type='file'
            value={null}
            onChange={this.handleChange}
            required />
        ]
      case 'Category':
        return (<select {...input} id={label} className='form__input'>
          <option />
          <option value='Fashion'>Fashion</option>
          <option value='Gadgets'>Phones and Computers</option>
          <option value='Cars'>Cars</option>
        </select>)
      case 'Price':
        return <input {...input} id={label} type='number' className='form__input' min='1' placeholder={label} />
      case 'Description':
        return <textarea {...input} id={label} className='form__input' rows='5' placeholder={label} />
      default:
        return <input {...input} id={label} type='text' className='form__input' placeholder={label} />
    }
  }

  renderLabel (label) {
    switch (label) {
      case 'Image':
        return <label htmlFor={label} className='form__label'>
          <figure><Icon name='camera' /></figure>
          {this.state.fileName}
        </label>
      default:
        return <label htmlFor={label} className='form__label'>{label}</label>
    }
  }

  render () {
    const { input, label, meta: { error, touched } } = this.props
    return (
      <div className='form__group'>
        {
          this.renderInput(label, input)
        }
        {
          this.renderLabel(label)
        }
        <div className='red-text u-margin-bottom-xsmall'>
          {touched && error}
        </div>
      </div>
    )
  }
}

export default ProductField
