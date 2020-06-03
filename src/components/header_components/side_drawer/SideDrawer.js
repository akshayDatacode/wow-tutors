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
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Contact us</a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default SideDrawer;
