import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../_actions'
import Icon from '../Icon/Icon'

function mapStateToProps ({ product, details }) {
  return {
    product,
    details
  }
}

class ProductDetail extends Component {
  renderColours = colours => {
    let coloursArray = colours.length < 5 ? colours : colours.slice(0, 5)
    return coloursArray.map(colour => {
      return (
        <Icon key={colour} name='controller-stop' colour={colour} />
      )
    })
  }

  renderContent () {
    const { name, price } = this.props.product.product
    const { description, category, image, colours } = this.props.details.details
    console.log(this.props)
    return (
      <main className='product-view'>
        <div className='gallery'>
          <figure className='gallery__item'>
            <img className='gallery__photo' src={image} alt='Product' />
          </figure>
          <figure className='gallery__item'>
            <img className='gallery__photo' src={image} alt='Product' />
          </figure>
          <figure className='gallery__item'>
            <img className='gallery__photo' src={image} alt='Product' />
          </figure>
        </div>

        <div className='overview'>
          <h1 className='overview__heading'>{name}</h1>
          <div className='overview__category'>
            <p>
              {category}
            </p>
          </div>
          <div className='overview__stars'>
            <Icon name='star' />
            <Icon name='star' />
            <Icon name='star' />
            <Icon name='star' />
          </div>
        </div>

        <div className='detail'>
          <div className='description'>
            <p className='paragraph'>
              {description}
            </p>
          </div>

          <div className='product-info'>
            <div className='product'>
              <div className='product__colours u-margin-bottom-small'>
                Colours available:&nbsp;
                {
                  this.renderColours(colours)
                }
              </div>
              <div className='product__actions u-margin-bottom-small'>
                <figure>
                  <Icon name='heart' />
                </figure>
                <figure>
                  <Icon name='shopping-cart' />
                </figure>
              </div>
              <p className='product__price'>
                <Icon name='credit-card' />
                &#8358;{price}
              </p>
            </div>
          </div>

        </div>
      </main>
    )
  }

  render () {
    return (
      this.renderContent()
    )
  }
}

export default connect(mapStateToProps, actions)(ProductDetail)
