import React, { Component } from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';
import Nav from '../Nav/Nav';

import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div className="profileWrapper">
        <Nav />
      </div>
    );
  }
}

export default Profile;