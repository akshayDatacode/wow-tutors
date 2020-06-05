import React, { Component } from "react";
import HomeCompoment from "./HomeComponent";
import fire from "../../config/fire";
import Login from "../../UserBase/Login";

class Index extends Component {
  state = {
    user: {},
  };

  componentDidMount() {
    this.authListner();
  }

  authListner() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <>
        <div>{this.state.user ? <HomeCompoment /> : <Login />}</div>
      </>
    );
  }
}

export default Index;
