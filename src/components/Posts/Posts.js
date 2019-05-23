import React, { Component } from "react";
import axios from "axios";

// import {Link} from 'react-router-dom';
import Nav from "../Nav/Nav";

import { connect } from "react-redux";
import { postPull } from "../../ducks/users";

import "./Posts.css";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catergories: []
    };
  }

  componentDidMount() {
    this.props.postPull(this.props.match.params.id)
  }

  render() {
    return (
      <div className="postsWrapper">
        <Nav />

        <h1>hello bucko</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    currentUser: state.currentUser
  };
}

export default connect(
  mapStateToProps,
  {
    postPull: postPull
  }
)(Posts);
