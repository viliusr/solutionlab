import React from 'react'
import { Alert, Button, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'

const Product = require('./product')
const ProductRemoveModal = require('./product-remove-modal')
const ProductAddModal = require('./product-add-modal')

class Main extends React.Component {

  constructor() {
    super()
    this.state = { products: null, showAddProductModal: false, showRemoveProductModal: false }
    this.getProducts = this.getProducts.bind(this)
    this.addProduct = this.addProduct.bind(this)
    this.removeProduct = this.removeProduct.bind(this)
    this.toggleAddProductModal = this.toggleAddProductModal.bind(this)
    this.toggleRemoveProductModal = this.toggleRemoveProductModal.bind(this)
  }

  getProducts() {
    this.setState({ products: null })
    return this.props.api.getAllProducts().then(products => {
      this.setState({ products })
    })
  }

  addProduct(data) {
    return this.props.api.addProduct(data).then(() => {
      this.toggleAddProductModal()
      this.getProducts() 
    })
  }

  removeProduct() {
    data = { id: this.state.productIdToRemove }
    return this.props.api.removeProduct(data).then(() => {
      this.toggleRemoveProductModal()
      this.getProducts() 
    })
  }

  toggleAddProductModal() {
    this.setState({ showAddProductModal: !this.state.showAddProductModal })
  }

  toggleRemoveProductModal(productId) {
    this.setState({ 
      showRemoveProductModal: !this.state.showRemoveProductModal,
      productIdToRemove: productId
    })
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
              <Button color="success" onClick={this.toggleAddProductModal}>Add</Button>
            </NavItem>
          </Nav>
        </Navbar>

        <div className="row">
          {this.state.products ? 
            this.state.products.map(product =>
              <Product key={product.id} data={product} toggle={this.toggleRemoveProductModal} />
            ) : <div className="col-lg-12 mb-4 text-center"><img width="100%" src="img/loader.gif" /></div>
          }
          {this.state.products && this.state.products.length === 0 ? 
            <div className="col-lg-12 mb-4">
              <Alert color="warning">Please add first product</Alert>
            </div>
            : ''
          }
        </div>

        <footer className="footer">
          <p>© Vilius Roškus 2017</p>
        </footer>

        <ProductAddModal show={this.state.showAddProductModal} toggle={this.toggleAddProductModal} trigger={this.addProduct} />
        <ProductRemoveModal show={this.state.showRemoveProductModal} toggle={this.toggleRemoveProductModal} trigger={this.removeProduct} />

      </div>
    )
  }

}

module.exports = Main