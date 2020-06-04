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
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#About-us">About Us</a>
            </li>
            <li>
              <a href="#why-choose-us">Why Choose</a>
            </li>
            <li>
              <a href="#testimonial">Testimonial</a>
            </li>
            <li>
              <a href="#footer">Contact Us</a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default SideDrawer;
