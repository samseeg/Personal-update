import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="homeWrapper">
        <Link to="/">
          <p>back</p>
        </Link>
        <header>
          <img src="" alt=""/>
          <div id="siteName"></div>
          <div id="logout"></div>
        </header>
        <div className='controlWrapper'>
        
        </div>
        <div className="categoryWrapper">
        
        </div>
      </div>
    );
  }
}

export default Home;
