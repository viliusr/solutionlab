require('isomorphic-fetch')
const config = require('../config.json')

function get(url) {
  return new Promise(resolve => {
    fetch(url).then(response => {
      resolve(response.json())
    })
  })
}

function post(url, data) {
  return new Promise(resolve => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => {
      resolve(response.json())
    })
  })
}

const api = {
  getProducts: () => get(config.serverUrl + '/products/get/all')
}

module.exports = api