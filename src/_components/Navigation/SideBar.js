import React from 'react'
import Icon from '../Icon/Icon'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <nav className='sidebar'>
      <ul className='side-nav'>
        <li className={`side-nav__item`}>
          <Link to='/products/new' className='side-nav__link'>
            <Icon name='plus' />
            <span>Add Product</span>
          </Link>
        </li>
        <li className='side-nav__item'>
          <a href='https://afternoon-refuge-91691.herokuapp.com/api/v1/docs'
            target='_blank'
            rel='noopener noreferrer'
            className='side-nav__link'>
            <Icon name='open-book' />
            <span>View API Docs</span>
          </a>
        </li>
      </ul>
      <div className='legal'>
        &copy; 2018
      </div>
    </nav>
  )
}

export default SideBar
