// Packages
import test from 'ava'
import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ReactHashAvatar from '../'

configure({ adapter: new Adapter() })

const component = <ReactHashAvatar width="30px" height="30px" name="name" radius="50%" />

test('has a .Foo class name', t => {
  const wrapper = shallow(component).instance().props

  t.snapshot(wrapper)
})
