import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="SHOPPING-MART_WEBSITES"
              description="One of the benefits of online shopping is that it makes the customer have quick access to items that are identical regardless of where he or she does the shopping for them."
              ghLink="https://github.com/rishabhkumar3387/SHOPPING-MART_WEBSITES.git"
              demoLink="https://rishabhshoppingmart.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="INVENTORY-MANAGEMENT-SYSTEM"
              description="Inventory management means safeguarding the company property in the form of inventories and maintaining it at the optimum level, The Inventory Management System is an automated version of manual Inventory Management System. It can handle all the records of a inventory. The details include sales details, purchases details, customers personal details, stock details exam ,product information, tax information and many more details"
              ghLink="https://github.com/rishabhkumar3387/frontend-pinventory-app.git"
              demoLink="https://frontendinventoryapp.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Online_Airline_reservation_system"
              description="Gone are the days when people who wanted to travel by air had to make long queues in order to book a flight. The invention of computers and the internet has made things simple because one can book a flight at the touch of a button. It explains the path that the automated reservations have followed to get to where they are today and also the challenges that have been met."
              ghLink="https://github.com/rishabhkumar3387/Online_Airline_reservation_system.git"
                         
            />
          </Col>

         

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Frontend_design_website"
              description="A login screen is a web page or an entry page to a web/mobile application that requires user identification and authentication, regularly performed by entering a username and password combination."
              ghLink="https://github.com/rishabhkumar3387/Guvi_developer_task.git"
               demoLink="https://frontpagedeveloping.netlify.app/#signup/login"    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
