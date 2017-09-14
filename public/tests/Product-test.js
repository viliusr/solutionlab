import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Product from '../src/product'

const data = { 
  id: 1, 
  title: 'Black coffee', 
  image: 'http://image.jpg',
  description: 'Very black coffee',
  price: 1.23
}

describe('Product', function() {

  const wrapper = mount(<div><Product data={data} /></div>)

  it('product contains image', function() {
    expect(wrapper.find('img').props().src).to.equal(data.image)
  })

  it('product contains title', function() {
    expect(wrapper.find('h4.card-title').text()).to.equal(data.title)
  })

  it('product contains description', function() {
    expect(wrapper.find('h6.card-subtitle').text()).to.equal(data.description)
  })

  it('product contains price', function() {
    expect(wrapper.find('.card-footer').text()).to.equal(data.price + ' EUR')
  })

})