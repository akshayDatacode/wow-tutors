import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class TestimonialCarousel extends Component {
  state = {};
  render() {
    return (
      <>
        <div id="testimonial" className="row text-center mt-5 p-md-5 mb-5">
          <div id="testimonial-headline" className="col p-5">
            <h2 className="mb-5">What Our Clients Say</h2>
            <Carousel indicators={false} className="p-md-5 ">
              <Carousel.Item>
                <div className="card text-center border border-white ml-md-5 mr-md-5">
                  <div className="card-header"></div>
                  <div className="card-body pl-md-5 pr-md-5 ml-md-5 mr-md-5">
                    <div className="card pl-md-5 pr-md-5">
                      <div className="card-header text-center">
                        <img
                          className=" card-img d-block w-100 circle p-sm-0 p-md-5"
                          style={{ borderRadius: "100%" }}
                          src={require("../../assets/images/ak.jpg")}
                          alt="First slide"
                        />
                      </div>
                      <div className="card-body ">
                        <p>
                          Scaling Marks is putting pressure on Students.it is
                          being expected to every student to perform well in
                          it's Exam. Parents are too engage to compare their
                          ward from other. Technological advancement has also
                          changed pattern of teaching structure . Every student
                          is being taught in same way ignoring his individual
                          quality cult in coaching,schools and college.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card text-center border border-white ml-md-5 mr-md-5">
                  <div className="card-header"></div>
                  <div className="card-body pl-md-5 pr-md-5 ml-md-5 mr-md-5">
                    <div className="card pl-md-5 pr-md-5">
                      <div className="card-header text-center">
                        <img
                          className=" card-img d-block w-100 circle p-sm-0 p-md-5"
                          style={{ borderRadius: "100%" }}
                          src={require("../../assets/images/ak2.jpg")}
                          alt="First slide"
                        />
                      </div>
                      <div className="card-body ">
                        <p>
                          Scaling Marks is putting pressure on Students.it is
                          being expected to every student to perform well in
                          it's Exam. Parents are too engage to compare their
                          ward from other. Technological advancement has also
                          changed pattern of teaching structure . Every student
                          is being taught in same way ignoring his individual
                          quality cult in coaching,schools and college.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card text-center border border-white ml-md-5 mr-md-5">
                  <div className="card-header"></div>
                  <div className="card-body pl-md-5 pr-md-5 ml-md-5 mr-md-5">
                    <div className="card pl-md-5 pr-md-5">
                      <div className="card-header text-center">
                        <img
                          className=" card-img d-block w-100 circle p-sm-0 p-md-5"
                          style={{ borderRadius: "100%" }}
                          src={require("../../assets/images/ak.jpg")}
                          alt="First slide"
                        />
                      </div>
                      <div className="card-body ">
                        <p>
                          Scaling Marks is putting pressure on Students.it is
                          being expected to every student to perform well in
                          it's Exam. Parents are too engage to compare their
                          ward from other. Technological advancement has also
                          changed pattern of teaching structure . Every student
                          is being taught in same way ignoring his individual
                          quality cult in coaching,schools and college.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card text-center border border-white ml-md-5 mr-md-5">
                  <div className="card-header"></div>
                  <div className="card-body pl-md-5 pr-md-5 ml-md-5 mr-md-5">
                    <div className="card pl-md-5 pr-md-5">
                      <div className="card-header text-center">
                        <img
                          className=" card-img d-block w-100 circle p-sm-0 p-md-5"
                          style={{ borderRadius: "100%" }}
                          src={require("../../assets/images/ak.jpg")}
                          alt="First slide"
                        />
                      </div>
                      <div className="card-body ">
                        <p>
                          Scaling Marks is putting pressure on Students.it is
                          being expected to every student to perform well in
                          it's Exam. Parents are too engage to compare their
                          ward from other. Technological advancement has also
                          changed pattern of teaching structure . Every student
                          is being taught in same way ignoring his individual
                          quality cult in coaching,schools and college.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card text-center border border-white ml-md-5 mr-md-5">
                  <div className="card-header"></div>
                  <div className="card-body pl-md-5 pr-md-5 ml-md-5 mr-md-5">
                    <div className="card pl-md-5 pr-md-5">
                      <div className="card-header text-center">
                        <img
                          className=" card-img d-block w-100 circle p-sm-0 p-md-5"
                          style={{ borderRadius: "100%" }}
                          src={require("../../assets/images/ak.jpg")}
                          alt="First slide"
                        />
                      </div>
                      <div className="card-body ">
                        <p>
                          Scaling Marks is putting pressure on Students.it is
                          being expected to every student to perform well in
                          it's Exam. Parents are too engage to compare their
                          ward from other. Technological advancement has also
                          changed pattern of teaching structure . Every student
                          is being taught in same way ignoring his individual
                          quality cult in coaching,schools and college.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </>
    );
  }
}

export default TestimonialCarousel;
