import React from "react";
import "./../css/Home.css";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";
import background from "./../images/background.jpg";

function Home() {
  return (
    <>
      <Header />
      <main
        id="home-container"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          width: "100vw",
          height: "auto",
        }}
      >
        <div className="container">
          <h1>
            <a>Hellen Wainaina</a>
          </h1>

          <h2>
            I'm a passionate <span>web developer</span> from Nairobi Kenya.
          </h2>
          <div className="social-links">
            <a className="twitter">
              <FaTwitter className="social" />
            </a>
            <a className="instagram">
              <FaInstagram className="social" />
            </a>
            <a className="linkedin">
              <FaLinkedin className="social" />
            </a>
            <a className="github">
              <FaGithub className="social" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
