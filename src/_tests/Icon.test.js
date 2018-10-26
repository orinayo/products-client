import { shallow } from 'enzyme'
import React from 'react'
import Icon from '../_components/Icon/Icon'

it('expect to render Icon component', () => {
  expect(shallow(<Icon />)).toMatchSnapshot()
})