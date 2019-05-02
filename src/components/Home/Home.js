import React, { Component } from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';
import Nav from '../Nav/Nav';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="homeWrapper">
        <Nav />
      </div>
    );
  }
}

export default Home;
