import React, { Component } from "react";
import "../../assets/css/ToolBar.css";
import DrawerToggleButton from "./side_drawer/DrawerToggleButton";
import {
  faAddressBook,
  faCheck,
  faHome,
  faUser,
  faUsers,
  faMapPin,
  faComment,
  faComments,
  faAddressCard,
  faDoorOpen,
  faClipboardCheck,
  faICursor,
  faInfo,
  faInfoCircle,
  faSplotch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import fire from "../../config/fire";

class ToolBar extends Component {
  state = {};

  // logout() {
  //   fire.auth().signOut();
  // }

  render() {
    return (
      <>
        <header className="toolbar fixed-top">
          <nav className="toolbar_navigation ">
            <div className="toolbar_toggle-button">
              <DrawerToggleButton clickButton={this.props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo">
              <img
                className="logo_img "
                src={require("../../assets/images/wow_logo.png")}
                alt="First slide"
              />
            </div>
            {/* This is for Logo and Nev Spaccing */}
            <div className="logo-nev-spacer" />
            <div className="toolbar_navigation-items">
              <ul>
                <li>
                  <a href="#home">
                    <FontAwesomeIcon icon={faHome} className="mr-2" />
                    Home
                  </a>
                </li>
                <li>
                  <a href="#About-us">
                    <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#why-choose-us">
                    <FontAwesomeIcon icon={faSplotch} className="mr-2" />
                    The WoW Edge
                  </a>
                </li>
                <li>
                  <a href="#testimonial">
                    <FontAwesomeIcon icon={faComments} className="mr-2" />
                    Stars Speak
                  </a>
                </li>
                <li>
                  <a href="#footer">
                    <FontAwesomeIcon icon={faAddressCard} className="mr-2" />
                    Contact Us
                  </a>
                </li>
                {/* <li>
                  <a href="#footer" onClick={this.logout}>
                    Log Out
                  </a>
                </li> */}
              </ul>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default ToolBar;
