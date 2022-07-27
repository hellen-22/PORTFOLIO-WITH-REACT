import React from "react";
import "./../css/Home.css";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";


function Home() {
  return (
    <>
    <Header />
    <main id="home-container">
      <div className="container">
        <h1>
          <a>Hellen Wainaina</a>
        </h1>

        <h2>
          I'm a passionate <span>web developer</span> from Nairobi Kenya.
        </h2>
        <div class="social-links">
          <a class="twitter">
            <FaTwitter className="social" />
          </a>
          <a class="instagram">
            <FaInstagram  className="social"/>
          </a>
          <a class="linkedin">
            <FaLinkedin className="social"/>
          </a>
          <a class="github">
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
