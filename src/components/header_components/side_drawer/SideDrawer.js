import React, { Component } from "react";
import "../../../assets/css/SideDrawer.css";

class SideDrawer extends Component {
  state = {};
  render() {
    let drawerClasses = "side-drawer";
    if (this.props.show) {
      drawerClasses = "side-drawer open";
    }
    return (
      <>
        <nav className={drawerClasses}>
          <h1 style={{ background: "Yellow" }}>Hello</h1>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/">Why Choose</a>
            </li>
            <li>
              <a href="/">Testimonial</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default SideDrawer;
