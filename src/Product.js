import React, { Component } from 'react';
<<<<<<< HEAD
import { Button } from 'react-bootstrap';
=======
>>>>>>> a203b1c0d7ba1dab96135cf8b6a4f0af0746f765

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: this.props.model,
      cost: this.props.cost
    };
  }

  sendPriceBack = () => {
    this.props.calculatingTotal(this.state.cost);
  };

  render() {
    return (
      <div>
        Model : {this.state.model}
        <br />
        Cost : {this.state.cost}
        <br />
<<<<<<< HEAD
        <Button onClick={this.sendPriceBack}>Add to cart</Button>
=======
        <button onClick={this.sendPriceBack}>Add to cart</button>
>>>>>>> a203b1c0d7ba1dab96135cf8b6a4f0af0746f765
        <hr />
      </div>
    );
  }
}

export default Product;
