import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import CardCarouselItem from "./CardCarouselItem";
import FontAwesome from "react-fontawesome";
import { faStarAndCrescent, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class InterviewQuestionCardCarousel extends Component {
  state = {};
  render() {
    return (
      <>
        {/* Desktop Carousel Cards  */}
        <div className="mb-4 p-md-5 ml-md-5 mr-md-5 mt-md-5 d-none d-sm-block text-center">
          <FontAwesomeIcon icon={faStar} size={"3x"} color={"#43413d"} />
          <h2 className="mb-4" style={{ color: "#43413d" }}>
            Stars Speak
          </h2>

          <Carousel indicators={false}>
            <Carousel.Item>
              <div
                className="card-deck pl-md-5 pr-md-5"
                style={{ color: "#43413d" }}
              >
                <CardCarouselItem
                  imgsource="t1.png"
                  title="I am a subscribed member of WoW Tutors and getting huge response from the students/parents. This is a wonderful platform for the people like me who r interested in teaching.I am very thankful for the support given by WoW team in finding the best tuitions. Thanks a lot for making me financially independent."
                  name="Neha Unhale"
                  type="(Teacher)"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck pl-md-5 pr-md-5">
                <CardCarouselItem
                  imgsource="boy.png"
                  title="Great teachers I got form the wow tutors, with the help of them I have got not only good marks but also well guidance towards achieving my goals. Thanks for wow tutors."
                  name="Mustafa"
                  type="(Student)"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck pl-md-5 pr-md-5">
                <CardCarouselItem
                  imgsource="t2.png"
                  title="Tutor experience :- A typical day at work is fun and flexible. I learn from my students and have wide autonomy in conducting each teaching session. Knowing I have helped someone to understand and my student's gratitude is the best part of my job."
                  name="Ankit Choure"
                  type="(Teacher)"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck pl-md-5 pr-md-5">
                <CardCarouselItem
                  imgsource="girl.png"
                  title="Great Website ! We found caring and humble tutor for our daughter She likes studying with the tutor.  - anushaka's parents"
                  name="Anushaka"
                  type="(Student)"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck pl-md-5 pr-md-5">
                <CardCarouselItem
                  imgsource="t3.png"
                  title="It is best Platform where children learn something and when they pass in exam we feel that we have completed our work and this platform also give me financially Support."
                  name="Akhilesh Yadav"
                  type="(Teacher)"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck pl-md-5 pr-md-5">
                <CardCarouselItem
                  imgsource="t5.png"
                  title="It was Funtasctic experience to doing work with wow tutor"
                  name="Ayushi"
                  type="(Teacher)"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck pl-md-5 pr-md-5">
                <CardCarouselItem
                  imgsource="girl.png"
                  title="we are so happy with our tutor’s performance. My daughter is showing more interest and understanding some of the difficulties in the subject. She feels good about her quizzes and tests. It's been pleasant working with the tutor, She is very punctual and dedicated towards her assessments ."
                  name="Sneha"
                  type="(Student)"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck pl-md-5 pr-md-5">
                <CardCarouselItem
                  imgsource="t4.jpeg"
                  title="The best consultancy ever I got is wow tutors. It gave me not only the platform to earn money but also learnt how to get success in professional life. A big thanks for Wow totors."
                  name="Ashish Mandliya"
                  type="(Teacher)"
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
                title="I am a subscribed member of WoW Tutors and getting huge response from the students/parents. This is a wonderful platform for the people like me who r interested in teaching.I am very thankful for the support given by WoW team in finding the best tuitions. Thanks a lot for making me financially independent.  -Neha Unhale"
                name="Neha Unhale"
                link="/index_interview_questioins"
                type="(Teacher)"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="girl.png"
                title="Great Website ! We found caring and humble tutor for our daughter She likes studying with the tutor.  - anushaka's parents"
                name="Anushaka"
                type="(Student)"
              />
            </Carousel.Item>

            <Carousel.Item>
              <CardCarouselItem
                imgsource="t2.png"
                title="Tutor experience :- A typical day at work is fun and flexible. I learn from my students and have wide autonomy in conducting each teaching session. Knowing I have helped someone to understand and my student's gratitude is the best part of my job.  - Ankit Choubey"
                name="Ankit Choure"
                type="(Teacher)"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="boy.png"
                title="Great teachers I got form the wow tutors, with the help of them I have got not only good marks but also well guidance towards achieving my goals. Thanks for wow tutors."
                name="Mustafa"
                type="(Student)"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="t3.png"
                title="It is best Platform where children learn something and when they pass in exam we feel that we have completed our work and this platform also give me financially Support."
                name="Akhilesh Yadav"
                type="(Teacher)"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="t5.png"
                title="It was Funtasctic experience to doing work with wow tutor"
                name="Ayushi"
                type="(Teacher)"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="girl.png"
                title="we are so happy with our tutor’s performance. My daughter is showing more interest and understanding some of the difficulties in the subject. She feels good about her quizzes and tests. It's been pleasant working with the tutor, She is very punctual and dedicated towards her assessments ."
                name="Sneha"
                type="(Student)"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="t4.jpeg"
                title="The best consultancy ever I got is wow tutors. It gave me not only the platform to earn money but also learnt how to get success in professional life. A big thanks for Wow totors."
                name="Ashish Mandliya"
                type="(Teacher)"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );
  }
}

export default InterviewQuestionCardCarousel;
