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
          <div className=" mt-5 text-center mb-5" id="Home">
            <img
              className="home_img card-img d-block  "
              src={require("../../assets/images/wow_logo.png")}
              alt="First slide"
            />
            <div>
              <h1
                className="btn border border-warning "
                style={{ background: "#f4cb58" }}
              >
                Call Now : 6260947192{" "}
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
                  The constant pressure of chasing marks, is scaling up the
                  stress among students. It is being expected from every
                  student, to perform exceptionally in every subject , which is
                  measured just from the scores obtained, in exams.
                </p>
                <p>
                  Parents often indulge in comparing their ward from others, on
                  the basis of scores adding to the pressure even more,
                  stressing further, that their ward should outperform others.
                </p>
                <p>
                  The educational institutions in an attempt to cover up the
                  gigantic syllabus, often rush up, ignoring the unique learning
                  needs of the students and leaving no time for proper
                  assimilation of the concepts delivered to them.
                </p>
                <p>
                  All this has led to the sudden surge in the demand of PRIVATE
                  TUITIONS, as they offer personalised attention and cater to
                  unique needs of the learners, that too from the comfort of
                  their homes.
                </p>
                <p>
                  It provides the scope of, in depth guidance and mentoring of
                  the students for effective change in the performance as well
                  as behaviour.
                </p>

                <h2 className="mt-4">Happy to help you</h2>
                <p>
                  Many concerned Parents enquire about it from teachers at
                  school, search exhaustively for it online and sometimes even
                  get a personal advertisement published in newspaper
                  classifieds.
                </p>
                <p>
                  But much of these efforts turn futile, while causing a hefty
                  sum of money and time to be drained in the activity.
                </p>
                <p>
                  But don't worry, as we are here to your rescue. WoW Tutors
                  works tirelessly to provide you the most experienced home
                  tutors, expert and trained professionals in their subjects.
                  Currently at your service in Indore and Bhopal.
                </p>
                <p>
                  Our team understands your concerns regarding the education of
                  your child and cater to your learning needs with utmost
                  commitment.
                </p>
              </div>
              <div id="About-Ad-section" className="col-md-6 ">
                <div
                  className="card border-none"
                  style={{ background: "#f7f7f6 ", borderColor: "#f7f7f6" }}
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfkEJOlsmw3pt6R-_jD2J8sfa3sYysxSxQlrFMoWMrtqV1XNA/viewform?usp=sf_link"
                    target="_blank"
                  >
                    <img
                      className=" card-img d-block w-100 border-none"
                      src={require("../../assets/images/7.png")}
                      alt="First slide"
                    />
                  </a>
                  <div className="card-body text-center mt-5 mb-3 border-none">
                    <div>
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfkEJOlsmw3pt6R-_jD2J8sfa3sYysxSxQlrFMoWMrtqV1XNA/viewform?usp=sf_link"
                        target="_blank"
                      >
                        <h1
                          className="btn border "
                          style={{
                            background: "#f4cb58",
                            borderColor: "#43413d",
                          }}
                        >
                          Join Us Now{" "}
                        </h1>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*About section ends*/}

          {/*Why Choose us section starts */}
          <div id="why-choose-us" class="text-center mt-5 pt-3">
            <h2 className="text-Success" style={{ color: "#43413d" }}>
              The WoW Edge
            </h2>
            <div className="row ">
              <div className="col ">
                <div
                  className="card-deck  mt-4 ml-0 mr-0 pb-2  pt-2"
                  style={{ background: "#43413d" }}
                >
                  <div className="card mb-md-4 mt-md-4 m-2">
                    <img
                      className=" card-img d-block w-100 "
                      src={require("../../assets/images/1.jpg")}
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
                      src={require("../../assets/images/2.jpg")}
                      alt="First slide"
                    />
                    <div
                      className="card-body p-2 text-center "
                      style={{ background: "#f4cb58" }}
                    >
                      <h6>Any class any subject anywhere in Indore</h6>
                    </div>
                  </div>
                  <div className="card mb-md-4 mt-md-4 m-2">
                    <img
                      className=" card-img d-block w-100"
                      src={require("../../assets/images/u.jpg")}
                      alt="First slide"
                    />
                    <div
                      className="card-body p-2 text-center "
                      style={{ background: "#f4cb58" }}
                    >
                      <h6>Online Classes are also Available </h6>
                    </div>
                  </div>
                  <div className="card mb-md-4 mt-md-4 m-2">
                    <img
                      className=" card-img d-block w-100"
                      src={require("../../assets/images/4.jpg")}
                      alt="First slide"
                    />
                    <div
                      className="card-body p-2 text-center "
                      style={{ background: "#f4cb58" }}
                    >
                      <h6>Personalized Relationship / Extra Attention</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*Why choose us section ends */}
          <div id="testimonial">
            {/*Testimonial section starts */}
            <TestimonialCardCarousel />
            {/*Testimonial section ends */}
          </div>
        </div>
      </>
    );
  }
}

export default HomeCompoment;
