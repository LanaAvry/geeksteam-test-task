import React, { Component } from 'react';
import './Login.css';

  class Login extends Component {
    render () {
      return (
      <div className="loginForm">
      <header className="loginHeader">
      <i className="fa fa-fire" aria-hidden="true"></i>
      Login
      </header>
      <form action="/login" method="post">
      <div className="loginField">
      <label htmlFor="userLogin"></label>
      <input type="text" id="userLogin" placeholder="Login"/>
      </div>
      <div className="passwordField">
       <label htmlFor="userPassword"></label>
      <input type="password" id="userPassword" placeholder="Password"/>
      </div>
      <button>Login
      <i className="fa fa-long-arrow-right"
      aria-hidden="true"></i>
      </button>
      </form>
      </div>
    );
  }
}

export default Login;
