import React, { Component } from "react";
import TestimonialCarousel from "./TestimonialCarousel";

import "../../assets/css/Home-Component.css";

class HomeCompoment extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-fluid p-0 mt-5">
          <div className="m-2  text-center mb-5">
            <h1 className="display-2 text-primary text-weight-bold text-center">
              WOW TUTORS
            </h1>
            <div>
              <h1 className="btn btn-primary">call : 7895854125 </h1>
            </div>
          </div>
          {/* About section starts */}
          <div id="About-us" className="container pl-3 border-warning">
            <div className="row">
              <div id="About-Content-section" className="col-md-6 p-3">
                <h2> WELCOME TO WOW TUTORS CONSULTANCY</h2>
                <p>
                  Scaling Marks is putting pressure on Students.it is being
                  expected to every student to perform well in it's Exam.
                  Parents are too engage to compare their ward from other.
                  Technological advancement has also changed pattern of teaching
                  structure . Every student is being taught in same way ignoring
                  his individual quality in many institution. It is growing need
                  of private tuition day by day. Private tuition helps slow
                  learner to get quality education in the comfort of your home.
                  It also helps bright students to learn in pace .as it protect
                  quality time for one-to-one discussion between students and
                  teachers that might be difficult in coaching,schools and
                  college.
                </p>
                <h3>How to find a perfect HOME TUTOR</h3>
                <p>
                  It is tough task to find a perfect tutor for you your ward. As
                  Many Parent inquire to school teacher,online searching even
                  give personal add in classified . Most of time it get futile
                  now you need not to worry Home Tutor consultancy has been
                  working to provide Experienced and Professional Home Tutor in
                  Many city Like Bhopal, Indore
                </p>
              </div>
              <div id="About-Ad-section" className="col-md-6">
                Add Section
              </div>
            </div>
          </div>
          {/*About section ends*/}

          {/*Why Choose us section starts */}
          <div id="why-choose-us" class="text-center mt-5 pt-3">
            <h2 className="text-Success">Why CHOOSE US SECTION</h2>
            <div className="row ">
              <div className="col ">
                <div
                  className="card-deck mt-4 ml-0 mr-0 bg-primary"
                  style={{ background: "back" }}
                >
                  <div className="card mb-4 ">
                    <img
                      className=" card-img d-block w-100"
                      src={require("../../assets/images/1.png")}
                      alt="First slide"
                    />
                    <div className="card-body text-center">
                      <h5>Card 1</h5>
                    </div>
                  </div>
                  <div className="card mb-4 ">
                    <img
                      className=" card-img d-block w-100"
                      src={require("../../assets/images/2.png")}
                      alt="First slide"
                    />
                    <div className="card-body text-center">
                      <h5>Card 2</h5>
                    </div>
                  </div>
                  <div className="card mb-4 ">
                    <img
                      className=" card-img d-block w-100"
                      src={require("../../assets/images/3.png")}
                      alt="First slide"
                    />
                    <div className="card-body text-center">
                      <h5>Card 3</h5>
                    </div>
                  </div>
                  <div className="card mb-4 ">
                    <img
                      className=" card-img d-block w-100"
                      src={require("../../assets/images/4.png")}
                      alt="First slide"
                    />
                    <div className="card-body text-center">
                      <h5>Card 4</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*Why choose us section ends */}

          {/*Testimonial section starts */}
          <TestimonialCarousel />
          {/*Testimonial section ends */}
        </div>
      </>
    );
  }
}

export default HomeCompoment;
