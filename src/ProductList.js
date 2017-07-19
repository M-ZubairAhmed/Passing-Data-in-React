import React, { Component } from 'react';
import Product from './Product';
import Total from './Total';
import InputBrand from './InputBrand';
import './styles.css';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [
        { model: 'Dell', cost: 20 },
        { model: 'Apple', cost: 100 },
        { model: 'HP', cost: 50 }
      ],
      total: 0,
      price: null
    };
  }

  calculatingTotal = price => {
    this.setState({
      total: Math.round((price + this.state.total) * 100) / 100
    });
  };

  addBrand = (brand, price) => {
    console.log('ProductList:', brand, '=', price);
    this.setState({
      productData: [
        ...this.state.productData,
        {
          model: brand,
          cost: parseFloat(price)
        }
      ]
    });
  };

  render() {
    const products = this.state.productData.map((brandData, i) =>
      <Product
        key={i}
        model={brandData.model}
        cost={brandData.cost}
        calculatingTotal={this.calculatingTotal}
      />
    );
    return (
      <div>
        <InputBrand addBrand={this.addBrand} />
        {products}
        <Total total={this.state.total} />
      </div>
    );
  }
}

export default ProductList;
