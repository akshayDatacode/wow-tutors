import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class CarouselComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <div className="card text-center p-0 m-0">
              <a
                // href="https://bit.ly/datacode_beginner_code_challenge"
                target="_blank"
              >
                <img
                  className=" card-img d-block w-100"
                  src={require("../../assets/images/slider/c1.png")}
                  alt="First slide"
                />
              </a>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="card text-center p-0 m-0">
              <a
                // href="https://bit.ly/datacode_beginner_code_challenge"
                target="_blank"
              >
                <img
                  className=" card-img d-block w-100"
                  src={require("../../assets/images/slider/c2.png")}
                  alt="First slide"
                />
              </a>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="card text-center p-0 m-0">
              <a
                // href="https://bit.ly/datacode_beginner_code_challenge"
                target="_blank"
              >
                <img
                  className=" card-img d-block w-100"
                  src={require("../../assets/images/slider/c3.png")}
                  alt="First slide"
                />
              </a>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="card text-center p-0 m-0 border-none">
              <a
                // href="https://bit.ly/datacode_beginner_code_challenge"
                target="_blank"
              >
                <img
                  className=" card-img d-block w-100"
                  src={require("../../assets/images/slider/c4.png")}
                  alt="First slide"
                />
              </a>
            </div>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default CarouselComponent;
