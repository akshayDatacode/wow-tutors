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
              <a href="/"> WOW TUTORS </a>
            </div>
            {/* This is for Logo and Nev Spaccing */}
            <div className="logo-nev-spacer" />
            <div className="toolbar_navigation-items">
              <ul>
                <li>
                  <a href="/home"> Home</a>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <a href="/"> Contact us</a>
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
