import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ProductAddModal extends React.Component {

  constructor() {
    super()
    this.state = { visible: false }
    this.data = {}
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  open() {
    this.setState({ visible: true })
  }

  close() {
    this.setState({ visible: false })
  }

  handleChange(event) {
    this.data[event.target.name] = event.target.value
  }

  render() {
    return (
      <Modal isOpen={this.state.visible} toggle={this.close}>
        <ModalHeader>Add new product</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label for="productTitle">Title</label>
            <input type="text" name="title" className="form-control" id="productTitle" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label for="productImage">Image url</label>
            <input type="text" name="image" className="form-control" id="productImage" onChange={this.handleChange} placeholder="http://..." />
          </div>
          <div className="form-group">
            <label for="productPrice">Price</label>
            <div className="input-group">
              <input type="text" name="price" className="form-control" id="productPrice" onChange={this.handleChange} placeholder="0.00" />
              <div className="input-group-addon">EUR</div>
            </div>
          </div>
          <div className="form-group">
            <label for="productDescription">Short description</label>
            <input type="text" name="description" className="form-control" onChange={this.handleChange} id="productDescription" />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => { this.props.trigger(this.data).then(this.close) }}>Confirm</Button>
          <Button color="default" onClick={this.close}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  }

}

ProductAddModal.propTypes = {
  trigger: React.PropTypes.function
};

module.exports = ProductAddModal