import React, { Component } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getCurrentUser } from "../../ducks/users";

import "./Nav.css";

class Nav extends Component {
  componentDidMount() {
    // this.props.getCurrentUser();
  }

  render() {
    // console.log("Nav.js current user ", this.props.currentUser);
    return (
      <div className="navWrapper">
        <Link to="/profile" className="profileImg btn">
          <img
            className="profilePic"
            src={this.props.currentUser.img}
            alt="profileAvatar"
          />
        </Link>
        <Link className="link name" to={'/categories'}>
        <div className="name btn">baarzz</div>
        </Link>
        <a href="/auth/logout" className="logout btn">
          Logout
        </a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(
  mapStateToProps,
  {
    getCurrentUser: getCurrentUser
  }
)(Nav);
