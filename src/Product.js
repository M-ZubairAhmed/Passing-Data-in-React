import React, { Component } from 'react';
import { Button, Grid } from 'react-bootstrap';
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
      <Grid>
        <div>
          Model : {this.state.model}
          <br />
          Cost : {this.state.cost}
          <br />
          <Button onClick={this.sendPriceBack}>Add to cart</Button>
          <hr />
        </div>
      </Grid>
    );
  }
}

export default Product;
