import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import careerpath from "../../Assets/Projects/careerpath.png";
import togo from "../../Assets/Projects/togo.png";
import notes from "../../Assets/Projects/notes.png";
import vgg from "../../Assets/Projects/vgg.png";
import lip2wav from "../../Assets/Projects/lip2wav.png";
import hsclassifier from "../../Assets/Projects/hsclassifier.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple">Project Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects that I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={careerpath}
              isBlog={false}
              title="Career Path"
              description="Web application that helps users consult and determine which career path would be ideal, 
              based on their education, experience, and interests. It has 3 user types namely consulting user, consultant user, 
              and admin user. The application is implemented using HTML, CSS, Javascript, ReactJS, NodeJS, and Firebase."
              ghLink="https://github.com/madhurimatummala/careerpath"
              // demoLink=""      <----- include a demo link here if there is any 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={togo}
              isBlog={false}
              title="ToGo"
              description="Web application that deals with picking up and dropping off of packages, connecting people 
              to the nearest delivery executive who can take care of the task at hand. This application has three user modules 
              which are admin user, customer user, delivery executive user. The application is implemented using HTML, CSS, 
              Javascript, ReactJS, NodeJS, ExpressJS, MongoDB, and Selenium."
              ghLink="https://github.com/madhurimatummala/togo"
              // demoLink=""      <----- include a demo link here if there is any 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notes}
              isBlog={false}
              title="Notes"
              description="Web application for writing down short notes and keeping a track of all the information. It is 
              implemented to use as quick notes. The application is implemented using HTML, CSS, Javascript, ReactJS, NodeJS."
              ghLink="https://github.com/madhurimatummala/Notes"
              // demoLink=""      <----- include a demo link here if there is any 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vgg}
              isBlog={false}
              title="Deep Learning Models"
              description="Conducted an investigation of the performance of deep learning models for classification of breast cancer 
              from histopathological images. It is a study of performance of deep learning models: VGG-11, VGG-13, VGG-16, and VGG-19. 
              The models are used for breast cancer detection with the help of histopathological images, using BACH and BreakHis datasets."
              ghLink="https://github.com/madhurimatummala/deeplearningmodels_vgg"
              // demoLink=""      <----- include a demo link here if there is any 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lip2wav}
              isBlog={false}
              title="Lip to Speech Synthesis Model"
              description="Lip to speech synthesis model generates spoken words from lip movements. It involves training deep neural networks 
              to map visual features of the lips to acoustic features of speech. Lip2Wav model consists of encoder and decoder using 
              convolutional neural networks."
              ghLink="https://github.com/madhurimatummala/lip2wav"
              // demoLink=""      <----- include a demo link here if there is any 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hsclassifier}
              isBlog={false}
              title="Hate Speech Classifier"
              description="Hate speech classifier has an automated method for finding instances of hate speech in textual data. Machine learning 
              algorithms are trained to identify textual patterns and presence of hate speech. It is implemented on Hate Speech and Offensive 
              Language (HSOL) dataset which consists of 24,802 tweets that have been manually flagged. The dataset includes three classes: 
              hate speech, offensive language, and neither."
              ghLink="https://github.com/madhurimatummala/hatespeechclassifier"
              // demoLink=""      <----- include a demo link here if there is any 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
