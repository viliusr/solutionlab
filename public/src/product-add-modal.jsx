import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ProductAddModal extends React.Component {

  constructor() {
    super()
    this.data = {}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.data[event.target.name] = event.target.value
  }

  render() {
    return (
      <Modal isOpen={this.props.show}>
        <ModalHeader>Add new product</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" className="form-control" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Image url</label>
            <input type="text" name="image" className="form-control" onChange={this.handleChange} placeholder="http://..." />
          </div>
          <div className="form-group">
            <label>Price</label>
            <div className="input-group">
              <input type="text" name="price" className="form-control" onChange={this.handleChange} placeholder="0.00" />
              <div className="input-group-addon">EUR</div>
            </div>
          </div>
          <div className="form-group">
            <label>Short description</label>
            <input type="text" name="description" className="form-control" onChange={this.handleChange} />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => this.props.trigger(this.data)}>Confirm</Button>
          <Button color="default" onClick={this.props.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  }

}

ProductAddModal.propTypes = {
  show: React.PropTypes.boolean,
  toggle: React.PropTypes.function,
  trigger: React.PropTypes.function
};

module.exports = ProductAddModal