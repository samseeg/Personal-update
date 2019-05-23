import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Posts from "./components/Posts/Posts";
import Comment from "./components/Comment/Comment";

export default (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/profile" component={Profile} />
    <Route exact path="/categories" component={Home} />
    <Route path="/categories/:id" component={Posts} />
    <Route path="/categories/:id/:id" component={Comment} />
  </Switch>
);