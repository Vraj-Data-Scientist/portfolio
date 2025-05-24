import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaBriefcase } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import "./ExperienceCard.css";

function ExperienceCard() {
  const experience = {
    title: "AI/ML Intern",
    company: "AtliQ Technologies Pvt. Ltd.",
    location: "Vadodara, India",
    duration: "Dec 2024 - Mar 2025",
    skills: [
      "PyTorch",
      "ResNet",
      "Hugging Face",
      "Transformers",
      "LLMs",
      "RAG",
      "Streamlit",
      "AWS",
      "Agile Development",
      "Teamwork",
    ],
    description: [
      "Led a team to develop two AI projects, driving communication with a cold storage firm and a healthcare company to define needs, completing a fruit freshness system and a Q&A tool using deep learning and generative AI.",
      "Spearheaded preprocessing of 16,000 fruit images and tuned a ResNet50 CNN, showcasing analytical skills to cut processing time by 30% and boost accuracy from 69.44% to 99.85%, earning recognition for impactful internship growth.",
      "Collaborated on a Streamlit-based healthcare AI tool, enhancing LLaMA 3 with RAG and retrieving PubMed data to deliver fast, evidence-based intermittent fasting insights for clinicians, improving decision-making efficiency.",
    ],
    projectTitle: "Freshness Inspection",
    domain: "Retail",
    projectLink: "https://dl-project-fruits-inspection-vraj-dobariya.streamlit.app/",
  };

  return (
    <Card className="quote-card-view">
      <Card.Body style={{ paddingTop: "0" }}>
        <blockquote className="blockquote mb-0" style={{ marginTop: "0" }}>
          <div style={{ marginTop: "30px", marginBottom: "100px" }}>
            <h3
              style={{
                fontSize: "1.5em",
                color: "#fff",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaBriefcase style={{ marginRight: "10px", color: "#c084f5" }} />
              <strong className="purple">Professional Experience</strong>
            </h3>
            <div
              style={{
                padding: "15px",
                textAlign: "left",
              }}
            >
              <div style={{ padding: "10px", borderLeft: "3px solid #c084f5" }}>
                <h4
                  style={{
                    fontSize: "1.2em",
                    color: "#fff",
                    marginBottom: "5px",
                  }}
                >
                  {experience.title}
                </h4>
                <p
                  style={{ color: "#ccc", margin: "0", fontSize: "0.9em" }}
                >
                  {experience.company}
                </p>
                <p
                  style={{ color: "#aaa", margin: "0", fontSize: "0.8em" }}
                >
                  {experience.location} | {experience.duration}
                </p>
                <p
                  style={{
                    color: "#ccc",
                    margin: "10px 0",
                    fontSize: "0.8em",
                  }}
                >
                  <strong>Skills:</strong> {experience.skills.join(", ")}
                </p>
                <ul
                  style={{
                    color: "#ccc",
                    margin: "10px 0",
                    paddingLeft: "20px",
                    fontSize: "0.8em",
                  }}
                >
                  {experience.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <p
                  style={{
                    color: "#ccc",
                    margin: "10px 0",
                    fontSize: "0.8em",
                  }}
                >
                  <strong>Project:</strong> {experience.projectTitle} (
                  {experience.domain})
                </p>
                <Button
                  variant="primary"
                  href={experience.projectLink}
                  target="_blank"
                  style={{ fontSize: "0.8em" }}
                >
                  <CgWebsite style={{ marginRight: "5px" }} />
                  Application Link
                </Button>
              </div>
            </div>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
