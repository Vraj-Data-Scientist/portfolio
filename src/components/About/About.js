import React from "react";
import { Container, Row} from "react-bootstrap";
import Particle from "../Particle";
import AboutCard from "./AboutCard";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
         
            <AboutCard />
        
         
        </Row>
      </Container>
    </Container>
  );
}

export default About;