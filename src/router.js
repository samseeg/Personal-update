import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './components/Login';

export default (
    <Switch>
        <Route exact path='/' component={Login} />
    </Switch>
)