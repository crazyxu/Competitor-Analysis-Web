import React, {Component} from 'react';

class NetworkManager extends Component{
  constructor(){
    super();
    this.host = "http://127.0.0.1:5000";
    let headers = {
      "Accept": "application/json"
    }
  }

  getProducts(){
    return fetch(this.host + '/products', {
      method: 'GET',
      method: "GET",
        headers: {
          "Accept": "application/json"
        }
    });
  }

  getProduct(id){
    return fetch(this.host + '/product/' + id);
  }

  filterProduct(filters){
    let filtersDict = {}
    for (let filter of filters) {
      filtersDict[filter.type]=filter.content;
    }
    return fetch(this.host + '/products/filters', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "filters": filtersDict
      })
    });
  }

  login(code){
    return fetch(this.host + '/login/phantom?code=' + code, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });
  }
}

export default NetworkManager;
