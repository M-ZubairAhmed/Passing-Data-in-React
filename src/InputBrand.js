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
          <Col lg={3} lgOffset={2} md={4}>
            <FormGroup>
              <FormControl
                name="inputBrand"
                value={this.state.inputName}
                type="text"
                placeholder="Enter Brand"
                onChange={this.handleInputChange}
              />
            </FormGroup>
          </Col>
          <Col lg={3} lgOffset={0} md={4}>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>$</InputGroup.Addon>
                <FormControl
                  name="inputPrice"
                  value={this.state.inputPrice}
                  type="number"
                  placeholder="Enter Price"
                  onChange={this.handleInputChange}
                />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col lg={1} lgOffset={0} md={4}>
            <Button bsStyle="primary" onClick={this.storeNewBrand}>
              Add new
            </Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default InputBrand;
