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
          height: "100vh",
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
                    developing backend and frontend systems using JavaScript,
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
                  Qui deserunt veniam. Et sed aliquam labore tempore sed
                  quisquam iusto autem sit. Ea vero voluptatum qui ut
                  dignissimos deleniti nerada porti sand markend
                </p>
              </div>
              <div className="resume-item">
                <h4>Data Science Mentorship Program</h4>
                <h5>2021 - 2021</h5>
                <p>
                  <em>She Code Africa</em>
                </p>
                <p>
                  Quia nobis sequi est occaecati aut. Repudiandae et iusto quae
                  reiciendis et quis Eius vel ratione eius unde vitae rerum
                  voluptates asperiores voluptatem Earum molestiae consequatur
                  neque etlon sader mart dila
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
                    Lead in the design, development, and implementation of the
                    graphic, layout, and production communication materials
                  </li>
                  <li>
                    Delegate tasks to the 7 members of the design team and
                    provide counsel on all aspects of the project.{" "}
                  </li>
                  <li>
                    Supervise the assessment of all graphic materials in order
                    to ensure quality and accuracy of the design
                  </li>
                  <li>
                    Oversee the efficient use of production project budgets
                    ranging from $2,000 - $25,000
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
                    Developed numerous marketing programs (logos,
                    brochures,infographics, presentations, and advertisements).
                  </li>
                  <li>
                    Managed up to 5 projects or tasks at a given time while
                    under pressure
                  </li>
                  <li>
                    Recommended and consulted with clients on the most
                    appropriate graphic design
                  </li>
                  <li>
                    Created 4+ design presentations and proposals a month for
                    clients and account managers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Resume;
