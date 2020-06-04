import React, { Component } from "react";
import "../../assets/css/Footer.css";
class IndexFooterComponent extends Component {
  state = {};
  render() {
    return (
      <>
        
           <footer>
    {/*footer left section starts */}
             <div id="footer-left-section">
               <div id="logo-content">
                  <div id="logobox">
                   <img
                      src={require("../../assets/images/wow_logo.png")}
                      />
                 </div>
                  <div id="footer-content">
                    Home Tutor Consultancy made it too easy for student to find a Home Tutor . Contact us – by Call,Mail, Chat box . it will be smooth your learning need
                    Thousand of Experienced tutor for Every Segment ,For Every kind of Learner Tutor Available for KG to 12th, Competition , Language, Hobby etc.
                  </div>
             </div>
            </div>
    {/*footer left section ends */}


        {/*footer right section starts */}

             <div id="footer-right-section">
                  <div id="right-secton">
                    <div id="heading">
                    <h2>Connect with us</h2>
                    </div>
                    <div id="social-icons">
                        
                    </div>


                  </div>
             </div>
        {/*footer right section ends */}


             </footer>
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
