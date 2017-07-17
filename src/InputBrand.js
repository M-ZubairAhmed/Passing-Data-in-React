import React, { Component } from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Grid,
  Row,
  Col
} from 'react-bootstrap';

class InputBrand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputPrice: '',
      inputBrand: ''
    };
  }

  handleInputChange = event => {
    if (event.target.name === 'inputBrand') {
      this.setState({
        inputBrand: event.target.value
      });
    } else if (event.target.name === 'inputPrice') {
      this.setState({
        inputPrice: event.target.value
      });
    }
  };

  render() {
    return (
      <Grid>
        <Row>
          <Col lg={4} lgOffset={4} md={4} mdOffset={4}>
            <FormGroup>
              <ControlLabel>Enter Brand</ControlLabel>
              <FormControl
                name="inputBrand"
                value={this.state.inputName}
                type="text"
                placeholder="only plain text"
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Enter Price</ControlLabel>
              <FormControl
                name="inputPrice"
                value={this.state.inputPrice}
                type="number"
                placeholder="enter number"
                onChange={this.handleInputChange}
              />
            </FormGroup>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default InputBrand;
