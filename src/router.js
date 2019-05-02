import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Profile from'./components/Profile/Profile';

export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/profile' component={Profile} />
    </Switch>
)