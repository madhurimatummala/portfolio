import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I love to bring ideas to life with a flick of computing. Whether it's about building websites, designing systems, 
              or developing applications, I am passionate, detail-oriented, and creative.
              <br />
              <br />I am fluent in multiple programming languages like
              <i>
                <b className="purple"> Javascript, Python, and C. </b>
              </i>
              <br />
              <br />
              My field of interest is to &nbsp;
              <i>
                <b className="purple">create intuitive, efficient, and innovative web solutions to complex challenges. </b>
              </i>
              <br />
              <br />
              I thrive in a 
              <i>
                <b className="purple">
                  {" "}
                  constantly evolving technological landscape
                </b>
              </i>
              &nbsp; as I am
              <i>
                <b className="purple"> always eager to learn and apply new techniques </b>
              </i>
              to deliver cutting-edge software products.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid avatar" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Please feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/madhurimatummala"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/madhurima-tummala-0a7927235"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/madhurima_tummala"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
