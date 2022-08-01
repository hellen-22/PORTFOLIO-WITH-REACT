import React from "react";
import myImage from "./../images/profile.jpg";
import Chevron from "react-chevron";
import "./../css/About.css";
import Header from "./Header";
import Footer from "./Footer";
import background from "./../images/background.jpg";


function About() {
  return (
    <>
    <Header />
    <section id="about" className="about"
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      width: "100vw",
      height: "auto",
    }}
    >
      {/* About */}
      <div className="about-me container">
        <div className="section-title">
          <h2>About</h2>
          <p>Learn more about me</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={myImage} className="img-fluid" alt=""></img>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Web Developer</h3>
            <p className="fst-italic">
              I am a web developer with a passion for building web applications.
              I have a strong background in web development and have a strong
              passion for learning new technologies.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right">
                      {" "}
                      <Chevron />{" "}
                    </i>
                    <strong>Birthday:</strong> <span>1 Dec 2000</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right">
                      {" "}
                      <Chevron />
                    </i>
                    <strong>Website:</strong> <span>www.example.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right">
                      {" "}
                      <Chevron />
                    </i>{" "}
                    <strong>Phone:</strong>
                    <span>+254 715 000 000</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right">
                      {" "}
                      <Chevron />
                    </i>{" "}
                    <strong>City:</strong>
                    <span>Nairobi, Kenya</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right">
                      <Chevron />
                    </i>{" "}
                    <strong>Age:</strong>
                    <span>21</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right">
                      <Chevron />
                    </i>{" "}
                    <strong>Degree:</strong>
                    <span>Bachelors</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right">
                      <Chevron />
                    </i>
                    <strong>Email:</strong> <span>hellenwain@gmail</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right">
                      <Chevron />
                    </i>
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="skills container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">
                HTML <i className="val">100%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                CSS <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                JavaScript <i className="val">75%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">
                Python <i className="val">80%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                MySQL <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                Java <i className="val">55%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="55"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interest */}
      <div className="interests container">
        <div className="section-title">
          <h2>Interests</h2>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="icon-box">
              <i className="ri-store-line" style={{ color: "#ffbb2c" }}></i>
              <h3>ReactJs</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="ri-bar-chart-box-line" style={{ color: "#5578ff" }}></i>
              <h3>NodeJs</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="ri-calendar-todo-line" style={{ color: "#e80368" }}></i>
              <h3>Django</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <i className="ri-paint-brush-line" style={{ color: "#e361ff" }}></i>
              <h3>Data Science</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-database-2-line" style={{ color: "#47aeff" }}></i>
              <h3>Data Visualization</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-gradienter-line" style={{ color: "#ffa76e" }}></i>
              <h3>Data Analysis</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-file-list-3-line" style={{ color: "#11dbcf" }}></i>
              <h3>PostgresSQL</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-price-tag-2-line" style={{ color: "#4233ff" }}></i>
              <h3>Kubernetes</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-anchor-line" style={{ color: "#b2904f" }}></i>
              <h3>Google Cloud Platform</h3>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    < Footer />
    </>
  );
}

export default About;
