import React, {Component} from 'react'
import NetworkManager from '../NetworkManager'
import cookie from 'react-cookie';
var networkManager = new NetworkManager();

class UserAccount extends Component{
  constructor(props){
    super(props);
    this.state = {
      "token": "",
      "username": "",
      "auth_code": props.code
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    this.setState({
      "token": cookie.load("token"),
      "username": cookie.load("username")
    });
  }

  render(){
    let hasLogined = (
      <h2 onClick={this.logout}>{this.state.username}</h2>
    );
    let unLogined = (
      <a href="https://huantengsmart.com/oauth2/authorize?client_id=9caad820ec1012dcc05cc7e1e58f8b70a4f633c02e9d32273d573ebc024f98ad&redirect_uri=http://127.0.0.1:3000/index&response_type=code&scope=read_user">登录</a>
    );
    let logging = (
      <h2>loading...</h2>
    );
    if (this.state.token != undefined && this.state.token != "") {
      return hasLogined;
    }else if (this.state.auth_code != undefined && this.state.auth_code != "") {
      this.login();
      return logging;
    }else{
      return unLogined;
    }
  }

  login(){
    networkManager.login(this.state.auth_code)
    .then(response => response.json())
    .then(json => {
      cookie.save("token", json.token, { path: '/' });
      cookie.save("username", json.username, { path: '/' });
      this.setState({"token": json.token, "username": json.username})
    })
    .catch(error => { console.log('request failed', error); });
  }

  logout(){
    cookie.remove("token", { path: '/' });
    cookie.remove("username", { path: '/' });
    this.setState({
      "token": "",
      "username": ""
    });
  }
}

export default UserAccount;
