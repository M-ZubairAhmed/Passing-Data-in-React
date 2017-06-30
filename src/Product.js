import React, { Component } from 'react';

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
        <button onClick={this.sendPriceBack}>Add to cart</button>
        <hr />
      </div>
    );
  }
}

export default Product;
