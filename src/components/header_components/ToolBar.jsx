import React, { Component } from "react";
import "../../assets/css/ToolBar.css";
import DrawerToggleButton from "./side_drawer/DrawerToggleButton";
import { Link } from "react-router-dom";

class ToolBar extends Component {
  state = {};
  render() {
    return (
      <>
        <header className="toolbar">
          <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
              <DrawerToggleButton clickButton={this.props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo">
              <a href="/">
                <img
                  className=" card-img d-block w-100"
                  src={require("../../assets/images/wow_logo.png")}
                  alt="First slide"
                />
              </a>
            </div>
            {/* This is for Logo and Nev Spaccing */}
            <div className="logo-nev-spacer" />
            <div className="toolbar_navigation-items">
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
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default ToolBar;
