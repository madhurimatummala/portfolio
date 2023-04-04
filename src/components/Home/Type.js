import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Web Developer",
          "Full Stack Developer",
          "UI/UX Developer",
          "Application Developer",
          "Software Engineer",
          "Data Analyst",
          "Business Analyst",
          "Data Engineer",
          "Machine Learning Enthusiast"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
