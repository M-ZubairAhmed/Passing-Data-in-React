import React, { Component } from 'react';

class Total extends Component {
  render() {
    return (
      <div>
        <h6>Cart value</h6>
        <h4>
          $ {this.props.total}/-
        </h4>
      </div>
    );
  }
}

export default Total;
