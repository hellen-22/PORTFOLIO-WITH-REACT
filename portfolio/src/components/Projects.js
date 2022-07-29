import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./../css/Project.css";

function Projects() {
    const [projects, setProjects] = useState([
        {
            id: 1,
            title: "App 1",
            description: "Web",
            image: require("./../images/portfolio/portfolio-1.jpg"),
            link: ""
        },
        {
            id: 2,
            title: "App 2",
            description: "Web",
            image: require("./../images/portfolio/portfolio-2.jpg"),
            link: ""
        },
        {
            id: 3,
            title: "App 3",
            description: "Web",
            image: require("./../images/portfolio/portfolio-3.jpg"),
            link: ""
        },
        {
            id: 4,
            title: "App 4",
            description: "Web",
            image: require("./../images/portfolio/portfolio-4.jpg"),
            link: ""
        },
        {
            id: 5,
            title: "App 5",
            description: "App",
            image: require("./../images/portfolio/portfolio-5.jpg"),
            link: ""
        },
        {
            id: 6,
            title: "App 6",
            description: "App",
            image: require("./../images/portfolio/portfolio-6.jpg"),
            link: ""
        },
        {
            id: 7,
            title: "App 7",
            description: "App",
            image: require("./../images/portfolio/portfolio-7.jpg"),
            link: ""
        },
        {
            id: 8,
            title: "App 8",
            description: "App",
            image: require("./../images/portfolio/portfolio-8.jpg"),
            link: ""
        },
        {
            id: 9,
            title: "App 9",
            description: "Web",
            image: require("./../images/portfolio/portfolio-9.jpg"),
            link: ""
        }
    ]);

    const handleClick = () => {
        setProjects(projects);
    }

    const changeProject = () => {
        
        projects.forEach(project => {
            if(project.description === "App") {
                setProjects(
                    projects.filter(project => project.description === "App")
                )
            }
            else if(project.description === "Web") {
                setProjects(
                    projects.filter(project => project.description === "Web")
                )
            }
            else if(project.description === "Card") {
                setProjects(
                    projects.filter(project => project.description === "Card")
                )
            }
        }
        )
    }
        
  return (
    <>
      <Header />
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>My Works</p>
          </div>

          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" onClick={() => handleClick()}>All</li>
                <li data-filter=".filter-app" onClick={() => changeProject()}>App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web" onClick={() => changeProject()}>Web</li>
              </ul>
            </div>
          </div>

          <div className="row portfolio-container">
            {projects.map(project => (
            <div className="col-lg-4 col-md-6 portfolio-item filter-app" key={project.id}>
              <div className="portfolio-wrap">
                <img
                  src={project.image}
                  className="img-fluid"
                  alt=""
                ></img>
                <div className="portfolio-info">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="portfolio-links">
                    <a
                      href={project.image}
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="App 1"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      data-gallery="portfolioDetailsGallery"
                      data-glightbox="type: external"
                      className="portfolio-details-lightbox"
                      title="Portfolio Details"
                    >
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Projects;
