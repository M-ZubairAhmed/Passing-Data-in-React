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
      total: price + this.state.total
    });
  };

  addBrand = (brand, price) => {
    console.log('ProductList', brand, '=', price);
    // this.setState({
    //   productData: [
    //     ...this.state.productData,
    //     (this.state.model: brand),
    //     (this.state.cost: price)
    //   ]
    // });
  };

  render() {
    const products = this.state.productData.map((product, i) =>
      <Product
        key={i}
        model={product.model}
        cost={product.cost}
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
