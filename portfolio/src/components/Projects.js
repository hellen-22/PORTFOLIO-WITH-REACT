import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./../css/Project.css";
import background from "./../images/background.jpg";

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "App 1",
      description: "Web",
      image: require("./../images/project/portfolio-1.jpg"),
      link: "",
    },
    {
      id: 2,
      title: "App 2",
      description: "Web",
      image: require("./../images/project/portfolio-2.jpg"),
      link: "",
    },
    {
      id: 3,
      title: "App 3",
      description: "Web",
      image: require("./../images/project/portfolio-3.jpg"),
      link: "",
    },
    {
      id: 4,
      title: "App 4",
      description: "Web",
      image: require("./../images/project/portfolio-4.jpg"),
      link: "",
    },
    {
      id: 5,
      title: "App 5",
      description: "App",
      image: require("./../images/project/portfolio-5.jpg"),
      link: "",
    },
    {
      id: 6,
      title: "App 6",
      description: "App",
      image: require("./../images/project/portfolio-6.jpg"),
      link: "",
    },
    {
      id: 7,
      title: "App 7",
      description: "App",
      image: require("./../images/project/portfolio-7.jpg"),
      link: "",
    },
    {
      id: 8,
      title: "App 8",
      description: "App",
      image: require("./../images/project/portfolio-8.jpg"),
      link: "",
    },
    {
      id: 9,
      title: "App 9",
      description: "Web",
      image: require("./../images/project/portfolio-9.jpg"),
      link: "",
    },
  ]);

  const handleClick = () => {
    setProjects(projects);
  };

  const changeProject = () => {
    projects.forEach((project) => {
      if (project.description === "App") {
        setProjects(
          projects.filter((project) => project.description === "App")
        );
      } else if (project.description === "Web") {
        setProjects(
          projects.filter((project) => project.description === "Web")
        );
      } else if (project.description === "Card") {
        setProjects(
          projects.filter((project) => project.description === "Card")
        );
      }
    });
  };

  return (
    <>
      <Header />
      <section
        id="project"
        className="project"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className="container">
          <div className="section-title">
            <h2>Project</h2>
            <p>My Works</p>
          </div>

          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="project-flters">
                <li data-filter="*" onClick={() => handleClick()}>
                  All
                </li>
                <li data-filter=".filter-app" onClick={() => changeProject()}>
                  App
                </li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web" onClick={() => changeProject()}>
                  Web
                </li>
              </ul>
            </div>
          </div>

          <div className="row project-container">
            {projects.map((project) => (
              <div
                className="col-lg-4 col-md-6 project-item filter-app"
                key={project.id}
              >
                <div className="project-wrap">
                  <img src={project.image} className="img-fluid" alt=""></img>
                  <div className="project-info">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div className="project-links">
                      <a
                        href={project.image}
                        data-gallery="projectGallery"
                        className="project-lightbox"
                        title="App 1"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a
                        href="project-details.html"
                        data-gallery="projectDetailsGallery"
                        data-glightbox="type: external"
                        className="project-details-lightbox"
                        title="Project Details"
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
