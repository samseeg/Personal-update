import React, { Component } from "react";

import { Link } from "react-router-dom";

// import { connect } from "react-redux";
// import { emptyPosts } from "../../ducks/users";

import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="navWrapper">
        <Link to='/profile' className="profileImg btn">
        <img alt='profile'  />
        </Link>
        <div className="name btn">BAARZZ</div>
        <a href="/auth/logout" className='logout btn'>Logout</a>
      </div>
    );
  }
}

export default Nav;
