import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Harish Anand </span>
            from <span className="purple"> Athens, Georgia, United States.</span>
            <br />
            <br />
            I am a passionate software engineer with experience in backend development,  
                 cloud technologies, and AI-driven solutions.
            <br />
            <br />
            I recently completed my Master's in Computer Science at the University of Georgia  
                       and previously worked as an Application Development Associate at Accenture. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing and Watching Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and Learning Different Cultures
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
