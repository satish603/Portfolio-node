import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import cricket from "../../Assets/Projects/cricket.png";
import train from "../../Assets/Projects/train.jpg";
import bank from "../../Assets/Projects/bank.png";
import job from "../../Assets/Projects/job.jpeg";
import crossword from "../../Assets/Projects/crossword.jpeg";


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
              imgPath={job}
              isBlog={false}
              title="Job and co"
              description="A flutter based mobile application mainly build for the enhancement of jobs for local workers.The app was build for the 2021-Solution Challenge organized by Google Developer Student Clubs.The basic technologies used are Flutter SDK,Firebase and DevTools."
              link="https://github.com/satish603/Job-co"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cricket}
              isBlog={false}
              title="Cricket Score Sheet Management"
              description="Mini project in c Cricket Score Sheet Management: This project includes the process of entering and recording the respective details of the players such as their names,This project aims at reducing the time involved in entering the scores manually in paper and helps in minimalizing human errors while entering the scores. This project uses C language to execute the task effectively."
              link="https://github.com/satish603/cricket-score-sheet-management"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bank}
              isBlog={false}
              title="Banking-system"
              description="This project is basically based on the topic of banking. How the transaction takes place in banks and how can we use this for our benefits we basically have a prototype ready through the help of c++ coding. We used varies types of functions in this c++ coding"
              link="https://github.com/satish603/banking-system"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crossword}
              isBlog={false}
              title="Crossword puzzle game"
              description="The goal of this project was design a puzzle game in which, various letters will be shown in a table and he/she can move horizontally, vertically or diagonally in order to make meaningful words."
              link="https://github.com/satish603/crossword-puzzle-game-python"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={train}
              isBlog={false}
              title="Railway Static web page"
              description="A Static web page using only HTML and CSS"
              link="https://github.com/satish603/railway"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
