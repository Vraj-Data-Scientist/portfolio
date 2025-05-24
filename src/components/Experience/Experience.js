import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "50px" }}>
          <ExperienceCard />
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
