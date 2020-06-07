import React, { Component } from "react";
import "../../../assets/css/SideDrawer.css";
import FontAwesome from "react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAddressBook,
  faQuestion,
  faCheckSquare,
  faUsers,
  faMap,
  faComments,
  faAddressCard,
  faClipboardCheck,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";

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
              <a href="#home">
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                Home
              </a>
            </li>
            <li>
              <a href="#About-us">
                <FontAwesomeIcon icon={faDoorOpen} className="mr-2" />
                About Us
              </a>
            </li>
            <li>
              <a href="#why-choose-us">
                <FontAwesomeIcon icon={faClipboardCheck} className="mr-2" />
                Why Choose
              </a>
            </li>
            <li>
              <a href="#testimonial">
                <FontAwesomeIcon icon={faComments} className="mr-2" />
                Testimonial
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
        </nav>
      </>
    );
  }
}

export default SideDrawer;
