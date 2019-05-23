import React, { Component } from "react";
import axios from 'axios';

// import {Link} from 'react-router-dom';
import Nav from "../Nav/Nav";

import { connect } from "react-redux";

import "./Comment.css";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catergories: []
    }
  }
  
  componentDidMount() {
    axios.get('http://localhost:80/categories')
      .then(response => {
        // console.log('data', response)
        this.setState({
          catergories: response.data
        })
      })
  }

  render() {
    return (
      <div className="homeWrapper">
        <Nav />

        <div className="catWrapper">
          {this.state.catergories.map((item, i) => {
            return(
              <div key={i} className="cat" style={{backgroundImage: `url(${item.img})`}}>
                <p>{item.cat_name}</p>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    //posts: state.posts,
    currentUser: state.currentUser
  };
}

export default connect(
  mapStateToProps,
  {
    // getCurrentUser: getCurrentUser
    //emptyPosts: emptyPosts
  }
)(Comment);