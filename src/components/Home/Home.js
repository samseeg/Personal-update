import React, { Component } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";

import { connect } from "react-redux";

import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catergories: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:80/categories").then(response => {
      // console.log('data', response)
      this.setState({
        catergories: response.data
      });
    });
  }

  render() {
    return (
      <div className="homeWrapper">
        {/* Nav bar */}
        <Nav />

        <h3>Categories</h3>
        {/* Categories */}
        <div className="catWrapper">
          {this.state.catergories.map((item, i) => {
            return (
              <Link key={i} className="link" to={`categories/${item.cat_id}`}>
                <div
                  key={i}
                  className="cat"
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <p>{item.cat_name}</p>
                </div>
              </Link>
            );
          })}
        </div>
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
  {}
)(Home);
