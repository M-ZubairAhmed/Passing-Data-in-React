import React, { Component } from 'react';
import Product from './Product';
import Total from './Total';
<<<<<<< HEAD
import InputBrand from './InputBrand';
import './styles.css';
=======
>>>>>>> a203b1c0d7ba1dab96135cf8b6a4f0af0746f765

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

  render() {
    const products = this.state.productData.map(product =>
      <Product
        model={product.model}
        cost={product.cost}
        calculatingTotal={this.calculatingTotal}
      />
    );
    return (
      <div>
<<<<<<< HEAD
        <InputBrand />
=======
>>>>>>> a203b1c0d7ba1dab96135cf8b6a4f0af0746f765
        {products}
        <Total total={this.state.total} />
      </div>
    );
  }
}

export default ProductList;
