import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ProductRemoveModal extends React.Component {

  constructor() {
    super()
    this.state = { visible: false }
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }
  
  open() {
    this.setState({ visible: true })
  }

  close() {
    this.setState({ visible: false })
  }

  render() {
    return (
      <Modal isOpen={this.state.visible} toggle={this.close}>
        <ModalHeader>Attention!</ModalHeader>
        <ModalBody>
          Do you really want to remove this product?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => { this.props.trigger().then(this.close) }}>Confirm</Button>
          <Button color="default" onClick={this.close}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  }

}

ProductRemoveModal.propTypes = {
  trigger: React.PropTypes.function
};

module.exports = ProductRemoveModal