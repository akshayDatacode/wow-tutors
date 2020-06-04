import React, { Component } from "react";
import "../../assets/css/About-section.css";

class HomeCompoment extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="m-5  text-center ">
          <h1 className="display-2 text-primary text-weight-bold">
            WOW TUTORS
          </h1>
          <div>
            <h1 className="btn btn-primary">call : 7895854125 </h1>
          </div>
        </div>
         {/* About section starts */}
        <div id="About-us">
            <div id="About-Content-section">
               <h2> WELCOME TO WOW TUTORS CONSULTANCY</h2>
               <p>
               Scaling Marks is putting pressure on Students.it is being expected to every student to perform well in it's Exam. Parents are too engage to compare their ward from other. Technological advancement has also changed pattern of teaching structure . Every student is being taught in same way ignoring his individual quality in many institution. It is growing need of private tuition day by day. Private tuition helps slow learner to get quality education in the comfort of your home. It also helps bright students to learn in pace .as it protect quality time for one-to-one discussion between students and teachers that might be difficult in coaching,schools and college.
               </p>
               <h3>
               How to find a perfect HOME TUTOR

               </h3>
               <p>It is tough task to find a perfect tutor for you your ward. As Many Parent inquire to school teacher,online searching even give personal add in classified . Most of time it get futile now you need not to worry Home Tutor consultancy has been working to provide Experienced and Professional Home Tutor in Many city Like Bhopal, Indore</p>
                           </div>
            <div id="About-Ad-section">
           Add Section
            </div>

          </div>
       {/*About section ends*/}

       {/*Why Choose us section starts */}
       <div id="why-choose-us">
         Why CHOOSE US SECTION
       </div>
       {/*Why choose us section ends */}

       {/*Testimonial section starts */}
       <div id="testimonial" >
           <div id="headline">
             What Our Clients Say
           </div>

       </div>
       {/*Testimonial section ends */}
      </>
    );
  }
}

export default HomeCompoment;
