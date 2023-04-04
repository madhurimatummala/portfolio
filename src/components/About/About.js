import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who <strong className="purple">Am I</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <div className="about-description">
            <p>
              Being a motivated and meticulous software developer that specializes in creating reliable applications, 
              I thrive to create innovative solutions to complex challenges and exceed user expectations. I have a 
              solid foundation in programming languages and technologies, with a track record of implementing high-quality 
              software of scalable and maintainable code. I strive to remain current with the latest industry trends and 
              commit to sharing my knowledge. I aim to collaborate with cross-functional teams as a software engineer because 
              I recognize the value of communication and cooperation in achieving project success. I am incredibly versatile 
              along with having strong capacity for rapid learning. I have demonstrated the ability to analyze and understand 
              business requirements with a budget, to translate them into technical solutions, meeting the project deadlines. 
              I am eager to apply my knowledge and expertise to various opportunities and obstacles.
            </p>
            <p>
              I believe that building software has more importance than just being a technical solution to a business problem. 
              It is essential for creating a stable and sustainable technology ecosystem that can support continued growth and 
              progress for future generations. I am looking forward to connect with professionals who share my interests.
            </p>
          </div>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Project Management</strong> Tools
        </h1>
        <Toolstack />
        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
