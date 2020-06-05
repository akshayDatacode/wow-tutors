import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class TestimonialCarousel extends Component {
  state = {};
  render() {
    return (
      <>
        <div id="testimonial" className="row text-center mt-5 p-0 mb-5">
          <div id="testimonial-headline" className="col p-5">
            <h2 className="mb-5">What Our Clients Say</h2>
            <Carousel indicators={false}>
              <Carousel.Item>
                <div className="card text-center border border-white">
                  <a
                    href="https://bit.ly/datacode_beginner_code_challenge"
                    target="_blank"
                  >
                    <img
                      className=" card-img d-block w-100"
                      src={require("../../assets/images/1.png")}
                      alt="First slide"
                    />
                  </a>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card text-center border border-white">
                  <img
                    className=" card-img d-block w-100"
                    src={require("../../assets/images/2.png")}
                    alt="First slide"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card text-center border border-white">
                  <img
                    className=" card-img d-block w-100"
                    src={require("../../assets/images/3.png")}
                    alt="First slide"
                  />
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
