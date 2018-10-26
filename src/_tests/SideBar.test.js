import { shallow } from 'enzyme'
import React from 'react'
import SideBar from '../_components/Navigation/SideBar'

it('expect to render SideBar component', () => {
  expect(shallow(<SideBar />)).toMatchSnapshot()
})