import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./../css/Resume.css";
import background from "./../images/background.jpg";

function Resume() {
  return (
    <>
      <Header />
      <section
        id="resume"
        className="resume"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          width: "100vw",
          height: "auto",
        }}
      >
        <div className="container">
          <div className="section-title">
            <h2>Resume</h2>
            <p>Check My Resume</p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Hellen Wainaina</h4>
                <p>
                  <em>
                    Innovative and deadline-driven Frontend and Backend
                    Developer with 2+ years of experience designing and
                    developing backend and frontend systems using JavaScript, Python,
                    HTML, CSS, React, Redux, Node, Express, MongoDB, and more.
                  </em>
                </p>

                <ul>
                  <li>Nairobi, Kenya</li>
                  <li>+254 715-111 575</li>
                  <li>hellenwain@gmail.com</li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Bachelor of Science in Information Technology</h4>
                <h5>2018 - 2022</h5>
                <p>
                  <em>Masinde Muliro University of Science and Technology</em>
                </p>
                <p>
                  <em>
                    CGPA: 3.8/4.0
                  </em>

                </p>
              </div>
              <div className="resume-item">
                <h4>Data Science Mentorship Program</h4>
                <h5>2021 - 2021</h5>
                <p>
                  <em>She Code Africa</em>
                </p>
                <p>
                  Three months mentorship program
                  <br></br>
                  <a href="https://drive.google.com/file/d/139mIm7_CVGBcorQ1jIIVlXkER9QH0QDV/view" className="she-code-certificate" target="_blank">Certificate of completion</a>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Backend Intern with Django-Python</h4>
                <h5>2021 - 2022</h5>
                <p>
                  <em>Machini Technologies</em>
                </p>

                <ul>
                  <li>
                    Lead in the development of a new backend system for ecp.
                  </li>
                  <li>
                    Developed a new backend system for ecp.
                  </li>
                  <li>
                    Creating DRF API endpoints for ecp.
                  </li>
                  <li>
                    Developing the company’s Website
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Frontend and Backend Intern with JavaScript</h4>
                <h5>2017 - 2018</h5>
                <p>
                  <em>Gustonera Software Solutions</em>
                </p>

                <ul>
                  <li>
                    Creating applications with ReactJs.
                  </li>
                  <li>
                    Responsible for creating API's with NodeJs.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p>Find my detailed resume <a href="https://drive.google.com/file/d/1232_VmU4zLy8X_nqLqjxp95CSL-004-Z/view?usp=sharing" className="resume-link" target="_blank">here</a> </p>
        </div>
        
      </section>
      <Footer />
    </>
  );
}

export default Resume;
