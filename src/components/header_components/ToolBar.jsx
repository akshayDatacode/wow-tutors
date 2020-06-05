import React, { Component } from "react";
import "../../assets/css/ToolBar.css";
import DrawerToggleButton from "./side_drawer/DrawerToggleButton";
import fire from "../../config/fire";

class ToolBar extends Component {
  state = {};

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <>
        <header className="toolbar fixed-top">
          <nav className="toolbar_navigation ">
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
                <li>
                  <a href="#footer" onClick={this.logout}>
                    Log Out
                  </a>
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
