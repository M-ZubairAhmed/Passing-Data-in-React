import React, { Component } from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
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
        <Row>
          <Col lg={4} lgOffset={3}>
            Model : {this.state.model}
            <br />
            Cost : {this.state.cost}
          </Col>
          <Col lg={1}>
            <Button onClick={this.sendPriceBack}>Add to cart</Button>
          </Col>
        </Row>
        <hr />
      </Grid>
    );
  }
}

export default Product;
