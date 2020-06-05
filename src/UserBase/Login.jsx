import React, { Component } from "react";
import fire from "../config/fire";
class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  login = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  signup = (e) => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <h1>Login</h1>
        <div>
          <form>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="Enter Email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <input
              name="password"
              type="password"
              id="password"
              onChange={this.handleChange}
              placeholder="Enter Password"
              value={this.state.password}
            />
            <div className="btn btn-primary" onClick={this.login}>
              Login
            </div>
            <div className="btn btn-success" onClick={this.signup}>
              Sign Up
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
