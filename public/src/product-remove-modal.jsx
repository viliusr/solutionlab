import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ProductRemoveModal extends React.Component {

  render() {
    return (
      <Modal isOpen={this.props.show}>
        <ModalHeader>Attention!</ModalHeader>
        <ModalBody>
          Do you really want to remove this product?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => { this.props.trigger().then(this.props.toggle) }}>Confirm</Button>
          <Button color="default" onClick={this.props.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  }

}

ProductRemoveModal.propTypes = {
  trigger: React.PropTypes.function
};

module.exports = ProductRemoveModal