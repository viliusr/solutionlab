import React from 'react'
import { Alert, Button, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'

const Product = require('./product')
const ProductRemoveModal = require('./product-remove-modal')
const ProductAddModal = require('./product-add-modal')

class Main extends React.Component {

  constructor() {
    super()
    this.state = { products: [], showAddProductModal: false, showRemoveProductModal: false }
    this.getProducts = this.getProducts.bind(this)
    this.addProduct = this.addProduct.bind(this)
    this.removeProduct = this.removeProduct.bind(this)
    this.closeAddProductModal = this.closeAddProductModal.bind(this)
    this.closeRemoveProductModal = this.closeRemoveProductModal.bind(this)
  }

  getProducts() {
    return this.props.api.getAllProducts().then(products => {
      this.setState({ products })
    })
  }

  addProduct(data) {
    this.setState({
      showAddProductModal: true,
      addProductModalTrigger: (data) => {
        return this.props.api.addProduct(data).then(this.getProducts)
      } 
    })
  }

  removeProduct(data) {
    this.setState({
      showRemoveProductModal: true,
      removeProductModalTrigger: () => {
        return this.props.api.removeProduct(data).then(this.getProducts)
      } 
    })
  }

  closeAddProductModal() {
    this.setState({ showAddProductModal: false })
  }

  closeRemoveProductModal() {
    this.setState({ showRemoveProductModal: false })
  }

  componentWillMount() {
    return this.getProducts()
  }

  render() {
    return (
      <div className="container">

        <Navbar color="faded" light toggleable className="my-4">
          <NavbarBrand href="/">Coffee billboard</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button color="success" onClick={this.addProduct}>Add</Button>
            </NavItem>
          </Nav>
        </Navbar>

        <div className="row">
          {this.state.products ? 
            this.state.products.map(product =>
              <Product data={product} removeAction={this.removeProduct} />
            ) : <div className="col-lg-12 mb-4 text-center"><img width="100%" src="img/loader.gif" /></div>
          }
          {this.state.products.length === 0 ? 
            <div className="col-lg-12 mb-4">
              <Alert color="warning">Please add first product</Alert>
            </div>
            : ''
          }
        </div>

        <footer className="footer">
          <p>© Vilius Roškus 2017</p>
        </footer>

        <ProductAddModal show="this.state.showAddProductModal" close={this.closeAddProductModal} trigger={this.state.addProductModalTrigger} />
        <ProductRemoveModal show="this.state.showRemoveProductModal" close={this.closeRemoveProductModal} trigger={this.state.removeProductModalTrigger} />

      </div>
    )
  }

}

module.exports = Main