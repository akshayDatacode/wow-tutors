import React, { Component } from "react";
import "../../assets/css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpen,
  faPhone,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
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
              <h4 className="text-center">Contact Us</h4>
              <div className="row">
                <div className="col-md-6 ">
                  <div className="row p-3 ">
                    <div className="col text-center">
                      <h4>Our Vision</h4>
                      <p className="pl-5 pr-5 mt-4 mb-4 ">
                        Akshay andliyaScaling Marks is putting pressure on
                        Students.it is being expected to every student to
                        perform well in it's Exam. Parents are too engage to
                        compare their ward from other. Technological advancement
                        has also changed pattern of teaching structure . Every
                        student is being taught in same way ignoring his
                        individual quality in many institution. It is growing
                        need of private tuition day by day. Private tuition
                        helps slow learner to get quality education in the
                      </p>
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
                      <FontAwesomeIcon icon={faAddressCard} className="mr-2" />{" "}
                      Address : 1st Floor Sappire Square Building Tower Square ,
                      Indore
                    </h6>
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
