import React, { Component } from "react";
import TestimonialCardCarousel from "./TestimonialCardCarousel";
import "../../assets/css/Home-Component.css";
import CarouselComponent from "./CarouselComponent";
import InterviewQuestionCardCarousel from "./TestimonialCardCarousel";

class HomeCompoment extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="container-fluid p-0 mt-2">
          <CarouselComponent />
          <div className=" mt-5 text-center mb-5" id="home">
            <h1
              className="display-2  text-weight-bold text-center"
              style={{ color: "#43413d" }}
            >
              WOW TUTORS
            </h1>
            <div>
              <h1
                className="btn border border-warning"
                style={{ background: "#f4cb58" }}
              >
                call : 7895854125{" "}
              </h1>
            </div>
          </div>
          {/* About section starts */}
          <div id="About-us" className="container pl-3 border-warning">
            <div className="row">
              <div
                id="About-Content-section"
                className="col-md-6 p-3"
                style={{ color: "#43413d" }}
              >
                <h2> WELCOME TO WOW TUTORS CONSULTANCY</h2>
                <p>
                  The constant pressure of chasing marks is scaling up the
                  stress among students. It being expected from every student to
                  perform exceptionally in every subject, which is measured just
                  from the scores obtained in exams. Parents often indulge in
                  comparing their ward from others on the basis of scores adding
                  to the pressure, even more, stressing furthermore than their
                  ward should outperform others. The educational institutions in
                  an attempt to cover up the gigantic syllabi, often rush up,
                  ignoring the unique learning needs of the students and leaving
                  no time for proper assimilation of the concepts delivered to
                  them. All this has led to the sudden surge in the demand of
                  ITS TUITIONS as they offer individualized attention and cater
                  to the unique needs of the learners, that too from the comfort
                  of their homes. It provides the scope of in-depth guidance and
                  mentoring of the students for effective change in the
                  performance as well as behavior.
                </p>
                <h3>Happy to help you</h3>
                <p>
                  Many concerned Parents enquire about it from teachers at
                  school, search exhaustively for it online or even get a
                  personal advertisement published in newspaper classifieds. But
                  much of these efforts turn futile while causing a hefty sum of
                  money and time to be drained in the activity. But don't worry,
                  as we are here to your rescue. WoW Tutors works tirelessly to
                  provide you the most experienced home tutors, expert, and
                  trained professionals in their subjects. Currently at your
                  service in Indore and Bhopal. Our team understands your
                  concerns regarding the education of your child and cater to
                  your learning needs with utmost commitment.
                </p>
              </div>
              <div id="About-Ad-section" className="col-md-6 ">
                <div
                  className="card border-none"
                  style={{ background: "#f7f7f6 ", borderColor: "#f7f7f6" }}
                >
                  <img
                    className=" card-img d-block w-100 border-none"
                    src={require("../../assets/images/7.png")}
                    alt="First slide"
                  />
                  <div className="card-body text-center mt-5 mb-3 border-none">
                    <div>
                      <h1
                        className="btn border "
                        style={{
                          background: "#f4cb58",
                          borderColor: "#43413d",
                        }}
                      >
                        Join Us Now{" "}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*About section ends*/}

          {/*Why Choose us section starts */}
          <div id="why-choose-us" class="text-center mt-5 pt-3">
            <h2 className="text-Success">What Make us Unique</h2>
            <div className="row ">
              <div className="col ">
                <div
                  className="card-deck  mt-4 ml-0 mr-0 pb-2  pt-2"
                  style={{ background: "#43413d" }}
                >
                  <div className="card mb-md-4 mt-md-4 m-2">
                    <img
                      className=" card-img d-block w-100 "
                      src={require("../../assets/images/1.png")}
                      alt="First slide"
                    />
                    <div
                      className="card-body p-2  text-center "
                      style={{ background: "#f4cb58" }}
                    >
                      <h6>Effective Teachers Available</h6>
                    </div>
                  </div>
                  <div className="card mb-md-4 mt-md-4 m-2">
                    <img
                      className=" card-img d-block w-100"
                      src={require("../../assets/images/2.png")}
                      alt="First slide"
                    />
                    <div
                      className="card-body p-2 text-center "
                      style={{ background: "#f4cb58" }}
                    >
                      <h6>Education that teaches you to Think</h6>
                    </div>
                  </div>
                  <div className="card mb-md-4 mt-md-4 m-2">
                    <img
                      className=" card-img d-block w-100"
                      src={require("../../assets/images/3.png")}
                      alt="First slide"
                    />
                    <div
                      className="card-body p-2 text-center "
                      style={{ background: "#f4cb58" }}
                    >
                      <h6>Any class any subject anywhere in Indore </h6>
                    </div>
                  </div>
                  <div className="card mb-md-4 mt-md-4 m-2">
                    <img
                      className=" card-img d-block w-100"
                      src={require("../../assets/images/4.png")}
                      alt="First slide"
                    />
                    <div
                      className="card-body p-2 text-center "
                      style={{ background: "#f4cb58" }}
                    >
                      <h6>From KG to 12th All Subjects (CBSE/ICSE)</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*Why choose us section ends */}

          {/*Testimonial section starts */}
          <TestimonialCardCarousel />
          {/*Testimonial section ends */}
        </div>
      </>
    );
  }
}

export default HomeCompoment;
