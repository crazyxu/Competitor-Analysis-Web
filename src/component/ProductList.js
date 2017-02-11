import React, {Component} from 'react'
import ProductItem from './ProductItem'

class ProductList extends Component{
  render(){
    let listItems = this.props.products.map((product, index) =>
      <li key={index}><ProductItem product={product}/></li>
    )
    return(
      <div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default ProductList;
