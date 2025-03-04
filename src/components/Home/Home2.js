import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
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
                I have a deep passion for programming and continuously strive to expand
                my knowledge and expertise.
              <br />
              <br /> I am proficient in languages such as
              <i>
                <b className="purple"> Java, Python, JavaScript, C </b> {" "}and <b className="purple">C++ </b> with a strong focus on backend development 
                using <b className="purple"> Java</b> {" "} and <b className="purple"> SpringBoot. </b>
              </i>
              <br />
              
              <br />
              My areas of interest include developing scalable
              <i>
                <b className="purple">{" "}web applications, optimizing backend systems </b> 
                {" "}and 
                <b className="purple">{" "}exploring AI-driven solutions. </b>
              </i>
              <br />
              <br />
               Whenever possible, I leverage my skills in
             
              <i>
                <b className="purple">
                  {" "}AWS, containerization with Docker and Kubernetes</b>{" "}and <b className="purple">modern frameworks</b>
                
              </i>
              &nbsp;to build efficient and high-performing applications.
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/harishanand51"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/harish-anand-204171184"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
