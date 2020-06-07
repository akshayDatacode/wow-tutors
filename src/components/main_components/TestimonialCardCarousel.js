import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import CardCarouselItem from "./CardCarouselItem";

class InterviewQuestionCardCarousel extends Component {
  state = {};
  render() {
    return (
      <>
        {/* Desktop Carousel Cards  */}
        <div className="mb-4 p-md-5 ml-md-5 mr-md-5 mt-md-5 d-none d-sm-block text-center">
          <h2 className="mb-4" style={{ color: "#43413d" }}>
            What Our Client says
          </h2>

          <Carousel indicators={false}>
            <Carousel.Item>
              <div
                className="card-deck pl-md-5 pr-md-5"
                style={{ color: "#43413d" }}
              >
                <CardCarouselItem
                  imgsource="t1.png"
                  title="Scaling Marks is putting pressure on Students.it is
                  being expected to every student to perform well in
                  it's Exam. Parents are too engage to compare their
                  ward from other. Technological advancement has also
                  changed pattern of teaching structure ."
                  name="Akshay Datacode"
                  link="/sql_interview_questioin"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck pl-md-5 pr-md-5">
                <CardCarouselItem
                  imgsource="t2.png"
                  title="Scaling Marks is putting pressure on Students.it is
                  being expected to every student to perform well in
                  it's Exam. Parents are too engage to compare their
                  ward from other. Technological advancement has also
                  changed pattern of teaching structure ."
                  name="Akshay Datacode"
                  link="/python_interview_question"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck pl-md-5 pr-md-5">
                <CardCarouselItem
                  imgsource="t3.png"
                  title="Scaling Marks is putting pressure on Students.it is
                  being expected to every student to perform well in
                  it's Exam. Parents are too engage to compare their
                  ward from other. Technological advancement has also
                  changed pattern of teaching structure ."
                  name="Akshay Datacode"
                  link="/cpp_interview_question"
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Mobile Carousel Cards  */}
        <div className="mb-5 d-block d-md-none mt-5 text-center">
          <h3 className="mb-4" style={{ color: "#43413d" }}>
            What Our Client says
          </h3>
          <Carousel indicators={false}>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="t1.png"
                title="Scaling Marks is putting pressure on Students.it is
                being expected to every student to perform well in
                it's Exam. Parents are too engage to compare their
                ward from other. Technological advancement has also
                changed pattern of teaching structure ."
                name="Akshay Datacode"
                link="/index_interview_questioins"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="t2.png"
                title="Scaling Marks is putting pressure on Students.it is
                being expected to every student to perform well in
                it's Exam. Parents are too engage to compare their
                ward from other. Technological advancement has also
                changed pattern of teaching structure ."
                name="Akshay Datacode"
                link="/dbms_interview_question"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="t3.png"
                title="Scaling Marks is putting pressure on Students.it is
                          being expected to every student to perform well in
                          it's Exam. Parents are too engage to compare their
                          ward from other. Technological advancement has also
                          changed pattern of teaching structure ."
                name="Akshay Datacode"
                link="/sql_interview_question"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );
  }
}

export default InterviewQuestionCardCarousel;
