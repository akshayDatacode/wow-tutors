import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint, faUserNinja } from "@fortawesome/free-solid-svg-icons";
class CardCarouselItem extends Component {
  state = {};
  render() {
    return (
      <>
        <div
          style={{ background: "#43413d", color: "#f4cb58" }}
          className=" card text-center shadow mt-md-2 pl-md-5 pr-md-5 pt-md-3 pl-5 pr-5 p-3  m-3"
        >
          <img
            className=" card-img d-block w-100 circle p-sm-0  "
            style={{ borderRadius: "100%" }}
            src={require("../../assets/images/" + this.props.imgsource)}
            alt="First slide"
          />
          <div className="card-body p-0 mt-4">
            <p className="text-center">{this.props.title}</p>
          </div>
        </div>
      </>
    );
  }
}

export default CardCarouselItem;
