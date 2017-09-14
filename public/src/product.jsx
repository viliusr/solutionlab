import React from 'react';
import { Button, Card, CardImg, CardBlock, CardTitle, CardSubtitle, CardFooter } from 'reactstrap';

const styles = {
  productRemoveButton: {
    position: 'absolute',
    top: '3px',
    right: '3px'
  }
}

class Product extends React.Component {

  render() {

    const product = this.props.data;

    return (
      <div className="col-xs-12 col-sm-6 col-md-3 mb-4">
        <Card>
          <CardImg top width="100%" src={product.image} alt="Product image" />
          <CardBlock>
            <CardTitle>{product.title}</CardTitle>
            <CardSubtitle>{product.description}</CardSubtitle>
            <Button color="danger" style={styles.productRemoveButton} onClick={() => this.props.removeAction({ id: product.id })}>X</Button>
          </CardBlock>
          <CardFooter className="text-center">{product.price} EUR</CardFooter>
        </Card>
      </div>
    )
  }

}

Product.propTypes = {
  data: React.PropTypes.object
};

module.exports = Product