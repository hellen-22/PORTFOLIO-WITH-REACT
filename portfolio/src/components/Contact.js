import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Form, Button, Row, Col } from "react-bootstrap";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaSkype,
  FaShareAlt,
  FaLandmark,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";
import "./../css/Contact.css";

function Contact() {
  return (
    <>
      <Header />
      <section id="contact" class="contact">
        <div class="container">
          <div class="section-title">
            <h2>Contact</h2>
            <p>Contact Me</p>
          </div>

          <div class="row mt-2">
            <div class="col-md-6 d-flex align-items-stretch">
              <div class="info-box">
                <i class="bx bx-map"><FaLandmark/></i>
                <h3>My Address</h3>
                <p>Nairobi, Kenya</p>
              </div>
            </div>

            <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
              <div class="info-box">
                <i class="bx bx-share-alt">< FaShareAlt/></i>
                <h3>Social Profiles</h3>
                <div class="social-links">
                  <a href="#" class="twitter">
                    <i class="bi bi-twitter">
                      <FaTwitter />
                    </i>
                  </a>
                  <a href="#" class="facebook">
                    <i class="bi bi-github">
                      <FaGithub />
                    </i>
                  </a>
                  <a href="#" class="instagram">
                    <i class="bi bi-instagram">
                      <FaInstagram />
                    </i>
                  </a>
                  <a href="#" class="google-plus">
                    <i class="bi bi-skype">
                      <FaSkype />
                    </i>
                  </a>
                  <a href="#" class="linkedin">
                    <i class="bi bi-linkedin">
                      <FaLinkedin />
                    </i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6 mt-4 d-flex align-items-stretch">
              <div class="info-box">
                <i class="bx bx-envelope"><FaEnvelope /></i>
                <h3>Email Me</h3>
                <p>hellenwain@gmail.com</p>
              </div>
            </div>
            <div class="col-md-6 mt-4 d-flex align-items-stretch">
              <div class="info-box">
                <i class="bx bx-phone-call"><FaPhone /></i>
                <h3>Call Me</h3>
                <p>+254 715 111 575</p>
              </div>
            </div>
          </div>

          <form
            action="forms/contact.php"
            method="post"
            role="form"
            class="php-email-form mt-4"
          >
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group class="mt-3 mt-md-0">
                  <Form.Control
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group class="mt-3">
              <Form.Control
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
            </Form.Group>
            <Form.Group class="mt-3">
              <textarea
                class="form-control"
                name="message"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </Form.Group>
            <div class="my-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div class="text-center">
              <Button type="submit">Send Message</Button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;