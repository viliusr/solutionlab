import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Main from '../src/main'

let products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Product 1 description',
    image: 'http://image.jpg',
    price: 1.00
  }
]

const api = {
  getAllProducts: () => Promise.resolve(products),
  addProduct: (data) => { 
    data.id = products.length + 1;
    products.push(data);
    return Promise.resolve({ status: true })
  },
  removeProduct: (data) => {
    products = products.filter((product) => product.id !== data.id)
    return Promise.resolve({ status: true })
  }
}

describe('Application', function() {

  const wrapper = mount(<div><Main api={api} /></div>)

  it('contains products', function() {
    expect(wrapper.find('.card').length).to.equal(1)
  })

  it('first product title matches data', function() {
    expect(wrapper.find('.card-title').text()).to.equal(products[0].title)
  })

})