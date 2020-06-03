import React, { Component } from "react";
import { Route, Switch } from "react-router";
import HomeComponent from "../components/main_components/HomeComponent";
import AboutComponent from "../components/main_components/AboutComponent";

class AppRouters extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/home" component={HomeComponent} />
        <Route path="/about" component={AboutComponent} />
      </Switch>
    );
  }
}

export default AppRouters;
