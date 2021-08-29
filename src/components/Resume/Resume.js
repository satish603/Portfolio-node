import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/satish.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://apis-satish603.vercel.app/info";
 
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);
  const [per10, upadateper10] = useState(0);
  const [per12, upadateper12] = useState(0);
  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
    
        upadteCgpa(res.data.message[0].cgpa);
        upadateSem(res.data.message[0].sem);
        upadateper10(res.data.message[0].per10);
        upadateper12(res.data.message[0].per12);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <meta name="google-site-verification" content="nwePx4eC2pygwgel2m6gyg3nrYaSBe-nOPXsJvR_4K4" />
      <Particle />
      <Container>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Certification</h3>
            <meta name="google-site-verification" content="nwePx4eC2pygwgel2m6gyg3nrYaSBe-nOPXsJvR_4K4" />
            <Resumecontent
              title="Modern Big Data Analysis with SQL"
              date="June 2021"
              content={[
                "sub Certification Under accomplishment","1.Foundations for Big Data Analysis with SQL" ,"2. Analyzing Big Data with SQL","Managing Big Data in Clusters and Cloud Storage"
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Hackathon [Techkriti'20 IIT KANPUR]"
              content={[
                "A 24 Hours hackathon to solve the problem of farmers using technology and help them to provide an opportunity to grow more."

              ]}
            />
            <Resumecontent
              title="Gizmo Geeks"
              content={[
                "Web Developer competition to build website using Dreamweaver.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Computer Science Engineering"
              date="2019 - Present"
              content={[`CGPA: ${cgpa} (Till ${sem}th Sem)`]}
            />
            <Resumecontent
              title="12TH BOARD CBSE"
              date="2018 - 2019"
              content={[`Percentage: ${per12}`]}
            />
            <Resumecontent
              title="10TH BOARD CBSE "
              date="2015 - 2016"
              content={[`Percentage: ${per10}`]}
            />
            <h3 className="resume-title">Achivements</h3>
            <Resumecontent
              title="Full stack developer"
              content={[
                "Have Completed more than 10 Certification and earned more than 50 badges."
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
