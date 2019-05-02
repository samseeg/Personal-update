import React, { Component } from "react";
// import {Link} from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div className="loginWrapper">
        <div className="loginTitle">BAARZZ</div>
        <div className="loginBtn">
          <a
            href={process.env.REACT_APP_LOGIN}
            className="login_btn"
            id="hiw-login-container"
          >
            <div>Login/Register</div>
          </a>
        </div>
      </div>
    );
  }
}

export default Login;
