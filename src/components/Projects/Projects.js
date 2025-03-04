import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ticket from "../../Assets/Projects/ticket.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import learning from "../../Assets/Projects/learning.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticket}
              isBlog={false}
              title="Cinema Booking Application"
              description=" A web-based platform for browsing movies, booking tickets, and availing promotions. The system features secure authentication, real-time seat availability, and dynamic pricing. Built using Java, Spring Boot, MySQL, RESTful APIs, and Spring Security for secure access and efficient data handling."
              ghLink="https://github.com/harishanand51/cinema-booking-service"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce Platform"
              description=" A scalable online shopping application supporting product browsing, shopping cart functionality, secure payments, and order tracking. It integrates Java, Spring Boot, MySQL, RESTful APIs, and third-party payment gateways, ensuring seamless transactions and inventory management."
              ghLink="https://github.com/harishanand51/ecommerce-service"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={learning}
              isBlog={false}
              title="Oniline and Offline Impacts on Students Grades"
              description="An AI-based system that detects human emotions from facial expressions and recommends personalized music to manage stress and fatigue. Developed using MTCNN, Deep Learning, Python, TensorFlow, and OpenCV, ensuring high-accuracy emotion detection and response automation."
              ghLink="https://github.com/harishanand51/onlineandofflinelearning-dataanalysis"
              //demoLink=""              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
