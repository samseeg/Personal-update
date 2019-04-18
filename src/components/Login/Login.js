import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
  render() {
    return (
        <Link to='/home'>
      <div className="loginWrapper">
     login
      </div>
      </Link>
    );
  }
}

export default Login;