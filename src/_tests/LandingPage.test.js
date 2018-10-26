import { shallow } from 'enzyme'
import React from 'react'
import LandingPage from '../_components/LandingPage/LandingPage'

it('expect to render LandingPage component', () => {
  expect(shallow(<LandingPage />)).toMatchSnapshot()
})