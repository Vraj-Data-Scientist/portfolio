import React from "react";
import Card from "react-bootstrap/Card";
import { FaBriefcase } from "react-icons/fa";

function ExperienceCard() {
  const experiences = [
    {
      title: "AI/Data Intern",
      company: "AtliQ Technologies Pvt. Ltd.",
      location: "(Remote) India",
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
    },
  ];

  return (
    <Card className="quote-card-view">
      <Card.Body style={{ paddingTop: "0" }}>
        <blockquote className="blockquote mb-0" style={{ marginTop: "0" }}>
          <div style={{ marginTop: "30px", marginBottom: "100px", paddingBottom: "50vh" }}>
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
            {experiences.map((exp, index) => (
              <div
                key={index}
                style={{
                  padding: "15px",
                  minWidth: "100%",
                }}
              >
                <div style={{ padding: "10px", borderLeft: "3px solid #c084f5" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "10px",
                      minHeight: "50px",
                    }}
                  >
                    <div style={{ textAlign: "left" }}>
                      <h4
                        style={{
                          fontSize: "0.9em",
                          color: "#fff",
                          margin: "0",
                        }}
                      >
                        {exp.title}
                      </h4>
                      <p
                        style={{
                          color: "#ccc",
                          margin: "5px 0 0 0",
                          fontSize: "0.9em",
                        }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p
                        style={{
                          color: "#aaa",
                          margin: "0",
                          fontSize: "0.8em",
                        }}
                      >
                        {exp.location}
                      </p>
                      <p
                        style={{
                          color: "#aaa",
                          margin: "5px 0 0 0",
                          fontSize: "0.8em",
                        }}
                      >
                        {exp.duration}
                      </p>
                    </div>
                  </div>
                  <ul
                    style={{
                      color: "#ccc",
                      margin: "15px 0 10px 0",
                      paddingLeft: "20px",
                      fontSize: "0.8em",
                      listStyleType: "disc",
                      wordSpacing: "2px",
                      lineHeight: "1.5",
                      textAlign: "left",
                    }}
                  >
                    {exp.description.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                  <p
                    style={{
                      color: "#ccc",
                      margin: "10px 0",
                      fontSize: "0.8em",
                      textAlign: "center",
                    }}
                  >
                    <strong>Skills:</strong> {exp.skills.join(", ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
