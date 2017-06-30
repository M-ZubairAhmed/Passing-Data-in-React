import React, { Component } from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
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
      console.log(this.state.inputBrand);
    }
  };

  render() {
    return (
      <form>
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
      </form>
    );
  }
}

export default InputBrand;
