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
  faInfoCircle,
  faSplotch,
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
              <a href="#Home">
                <h5>
                  <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
                </h5>
              </a>
            </li>
            <li>
              <a href="#About-us">
                <h5>
                  <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> About
                  Us
                </h5>
              </a>
            </li>
            <li>
              <a href="#why-choose-us">
                <h5>
                  <FontAwesomeIcon icon={faSplotch} className="mr-2" />
                  The Wow Edge
                </h5>
              </a>
            </li>
            <li>
              <a href="#testimonial">
                <h5>
                  <FontAwesomeIcon icon={faComments} className="mr-2" /> Stars
                  Speak
                </h5>
              </a>
            </li>
            <li>
              <a href="#footer">
                <h5>
                  <FontAwesomeIcon icon={faAddressCard} className="mr-2" />{" "}
                  Contact Us
                </h5>
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
