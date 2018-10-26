import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { history } from '../_helpers'
import * as actions from '../_actions'
import SideBar from '../_components/Navigation/SideBar'
import LandingPage from '../_components/LandingPage/LandingPage'
import ProductDetail from '../_components/Products/ProductDetail'
import ProductNew from '../_components/Products/ProductNew'

class App extends Component {
  render () {
    return (
      <div>
        <Router history={history}>
          <div className='container'>
            <div className='content'>
              <SideBar />
              <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/products/new' component={ProductNew} />
                <Route exact path='/products/:id/details' component={ProductDetail} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { alert } = state
  return {
      alert
  }
}

export default connect(mapStateToProps, actions)(App)
