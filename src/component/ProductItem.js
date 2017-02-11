import React, {Component} from 'react'

class ProductItem extends Component{
  render(){
    return(
      <div>
        <a href={this.props.product.product_url} target="view_window">{this.props.product.title}</a><br/>
        <h4>{this.props.product.sales}</h4>
      </div>
    );
  }
}

export default ProductItem;
