import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Madhurima Tummala </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            <br />
            I am curently pursuing <span className="purple">Master of Science in Computer Science</span> from
            <span className="purple"> Purdue University</span>, Indiana, United States of America.
            <br />
            <br />
            I have  <span className="purple">experience</span> working with a variety of <span className="purple">
            programming languages and frameworks</span>. I want to use my skillset to make a positive impact in the 
            world of software development.
            <br />
            <br />
            The <span className="purple">quotation</span> that I live by <span className="purple">"It's not about ideas. 
            It's about making ideas happen."</span>
            <br />
            <br />
            Apart from the usual, some of the <span className="purple">activities that I enjoy doing</span> are 
            <span className="purple"> Technical Operations in Functional Areas, Reading, Writing, Travel, and 
            Photography</span>.
            <br />
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
