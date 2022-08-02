import React, { useRef } from "react";
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
  FaPhone,
} from "react-icons/fa";
import "./../css/Contact.css";
import background from "../images/background.jpg";
import axios from "axios";

function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    let data ={
      name: nameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value
    }
    console.log(data)

    let responses = axios({
      method: "POST",
      url: "http://localhost:3008/contact",
      data: data,
      headers :{
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log(response)
    }
    ).catch((error) => {
      console.log(error)
    }
    )

  }

  return (
    <>
      <Header />
      <section
        id="contact"
        className="contact"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          width: "100vw",
          height: "auto",
        }}
      >
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>Contact Me</p>
          </div>

          <div className="row mt-2">
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-map">
                  <FaLandmark />
                </i>
                <h3>My Address</h3>
                <p>Nairobi, Kenya</p>
              </div>
            </div>

            <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-share-alt">
                  <FaShareAlt />
                </i>
                <h3>Social Profiles</h3>
                <div className="social-links">
                  <a href="#" className="twitter">
                    <i className="bi bi-twitter">
                      <FaTwitter />
                    </i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="bi bi-github">
                      <FaGithub />
                    </i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="bi bi-instagram">
                      <FaInstagram />
                    </i>
                  </a>
                  <a href="#" className="google-plus">
                    <i className="bi bi-skype">
                      <FaSkype />
                    </i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bi bi-linkedin">
                      <FaLinkedin />
                    </i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-4 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-envelope">
                  <FaEnvelope />
                </i>
                <h3>Email Me</h3>
                <p>hellenwain@gmail.com</p>
              </div>
            </div>
            <div className="col-md-6 mt-4 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-phone-call">
                  <FaPhone />
                </i>
                <h3>Call Me</h3>
                <p>+254 715 111 575</p>
              </div>
            </div>
          </div>

          <form
            action="forms/contact.php"
            method="post"
            role="form"
            className="php-email-form mt-4"
            onSubmit={handleSubmit}
          >
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    ref={nameRef}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mt-3 mt-md-0">
                  <Form.Control
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    ref={emailRef}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mt-3">
              <Form.Control
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                ref={subjectRef}
                required
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder="Message"
                ref={messageRef}
                required
              ></textarea>
            </Form.Group>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div className="text-center">
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
