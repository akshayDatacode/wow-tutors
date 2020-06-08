import React, { Component } from "react";
import "../../assets/css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpen,
  faPhone,
  faAddressCard,
  faWater,
} from "@fortawesome/free-solid-svg-icons";
import {
  fab,
  faFacebookSquare,
  faLinkedinIn,
  faYoutube,
  faInstagram,
  faWhatsapp,
  faWhatsappSquare,
  faFacebook,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
class IndexFooterComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <footer
          id="footer"
          className="container-fluid p-0"
          style={{ background: "#f4cb58", color: "#43413d" }}
        >
          <div className="row">
            <div className="col mt-4">
              <h2 className="text-center">Contact Us</h2>
              <div className="row">
                <div className="col-md-6 ">
                  <div className="row p-3 ">
                    <div className="col text-center">
                      <h3>We Offer</h3>

                      <ul className="text-left mt-5 mb-5 mt-md-2 mb-md-2">
                        <h5>Teachers for</h5>
                        <li>KG to 5th Std.</li>
                        <li>6th to 8th Std.</li>
                        <li>8th and 9th Std.</li>
                        <li>11th ,12th Physics,Chemistry,Biology.</li>
                        <li>French.</li>
                        <li>Spoken English.</li>
                        <li>Family Yoga Teacher.</li>
                        <li>online Yoga Assistant.</li>
                        <li>Home Schooling Assistant</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 text-left mt-md-5 mb-md-0 mb-5 ">
                  <div className="ml-5">
                    <h6 className="mb-2">
                      {" "}
                      <FontAwesomeIcon icon={faEnvelopeOpen} className="mr-2" />
                      Email : wowtutorsindore@gmail.com
                    </h6>
                    <h6 className="mb-2">
                      <FontAwesomeIcon icon={faPhone} className="mr-2" /> Phone
                      : 6260947192
                    </h6>
                    <h6 className="mb-2">
                      <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />{" "}
                      Whatsapp : 6260947192
                    </h6>
                    <h6 className="mb-2">
                      <FontAwesomeIcon icon={faAddressCard} className="mr-2" />{" "}
                      Address : 1st Floor Sappire Square Building, Tower Square
                      , Indore
                    </h6>
                  </div>
                  <div className="ml-md-5 ml-5  mt-5">
                    <a
                      href="https://m.facebook.com/wowtutorsindore/"
                      target="_balnk"
                    >
                      <FontAwesomeIcon
                        color="#43413d"
                        icon={faFacebook}
                        size={"2x"}
                        className="mr-4 mr-md-4  "
                      />
                    </a>{" "}
                    <a
                      href="https://twitter.com/TutorsWow?s=08"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        color="#43413d"
                        icon={faTwitter}
                        size={"2x"}
                        className="mr-4 mr-md-4 "
                      />
                    </a>{" "}
                    <a
                      href="https://www.linkedin.com/mwlite/company/wow-tutors"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        color="#43413d"
                        icon={faLinkedinIn}
                        size={"2x"}
                        className="mr-4 mr-md-4 "
                      />
                    </a>{" "}
                    <a
                      href="https://www.instagram.com/wow_tutor?r=nametag"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        color="#43413d"
                        icon={faInstagram}
                        size={"2x"}
                        className="mr-4 mr-md-4 "
                      />
                    </a>{" "}
                    <a
                      href="https://www.youtube.com/channel/UCTQ3f_cUs-3j6jEfyFCgzrw"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        color="#43413d"
                        icon={faYoutube}
                        size={"2x"}
                        className="mr-4 mr-md-4 "
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div
          className="footer-copyright text-center py-2"
          style={{ background: "#43413d" }}
        >
          © 2020 Copyright:{" "}
          <a href="www.datacode.in" className="text-white">
            datacode.in
          </a>
        </div>
      </>
    );
  }
}

export default IndexFooterComponent;
