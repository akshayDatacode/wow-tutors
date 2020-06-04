import React, { Component } from "react";
import "../../assets/css/Footer.css";
class IndexFooterComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <footer id="footer">ssssssssssdf</footer>
        <div
          className="footer-copyright text-center py-3"
          style={{ background: "#3498db" }}
        >
          © 2020 Copyright:
          <a href="www.datacode.in" className="text-white">
            datacode.in
          </a>
        </div>
      </>
    );
  }
}

export default IndexFooterComponent;
