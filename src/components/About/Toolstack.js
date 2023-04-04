import React from "react";
import { Col, Row } from "react-bootstrap";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">JIRA</Col>
      <Col xs={4} md={2} className="tech-icons">Git</Col>
      <Col xs={4} md={2} className="tech-icons">Trello</Col>
      <Col xs={4} md={2} className="tech-icons">Teamwork</Col>
      <Col xs={4} md={2} className="tech-icons">Microsoft Office</Col>
    </Row>
  );
}

export default Toolstack;
