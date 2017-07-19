import React, { Component } from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Grid,
  Row,
  Col,
  Button,
  InputGroup
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

  storeNewBrand = () => {
    this.props.addBrand(this.state.inputBrand, this.state.inputPrice);
  };

  render() {
    return (
      <Grid>
        <Row>
          <Col lg={2} lgOffset={4} md={4}>
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
          </Col>
          <Col lg={2} md={4}>
            <FormGroup>
              <ControlLabel>Enter Price</ControlLabel>
              <InputGroup>
                <InputGroup.Addon>$</InputGroup.Addon>
                <FormControl
                  name="inputPrice"
                  value={this.state.inputPrice}
                  type="number"
                  placeholder="enter number"
                  onChange={this.handleInputChange}
                />
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Button bsStyle="primary" onClick={this.storeNewBrand}>
            Add new
          </Button>
        </Row>
      </Grid>
    );
  }
}

export default InputBrand;
