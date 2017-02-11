import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './component/ProductList'
import FilterComponent from './component/FilterComponent'
import UserAccount from './component/UserAccount'
import NetworkManager from './NetworkManager'

var networkManager = new NetworkManager();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {products: [], filters: []};
    this.searchProduct = this.searchProduct.bind(this);
  }

  componentWillMount(){
    this.fetchProducts();
  }

  fetchProducts(){
    networkManager.getProducts()
      .then(response => response.json())
      .then(json => {
        console.log("json", json)
        this.setState({"products": json})
      })
      .catch(error => { console.log('request failed', error); }
    );
  }

  render() {
    return (
      <div className="App">
        <h1>竞品分析</h1>
        <UserAccount code={this.props.location.query.code}/>
        <FilterComponent search={this.searchProduct}/>
        <ProductList products={this.state.products}/>

      </div>
    );
  }

  searchProduct(filters){
    networkManager.filterProduct(filters)
      .then(response => response.json())
      .then(json => {
        this.setState({"products": json})
      })
      .catch(error => { console.log('request failed', error); }
    );
  }
}

export default App;
