import React from "react";
import Card from "react-bootstrap/Card";
import { FaBriefcase } from "react-icons/fa";

function ExperienceCard() {
  const experiences = [
    {
      title: "AI/Data Intern",
      company: "AtliQ Technologies Pvt. Ltd.",
      location: "India (Remote)",
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
                justifyContent: "flex-start",
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
                      flexDirection: "column",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "0.9em",
                        color: "#fff",
                        margin: "5px 0",
                        textAlign: "center",
                      }}
                    >
                      {exp.title}
                    </h4>
                    <p
                      style={{
                        color: "#fff",
                        margin: "5px 0",
                        fontSize: "0.9em",
                        textAlign: "center",
                      }}
                    >
                      {exp.company}
                    </p>
                    <p
                      style={{
                        color: "#fff",
                        margin: "5px 0",
                        fontSize: "0.9em",
                        textAlign: "center",
                      }}
                    >
                      {exp.location}
                    </p>
                    <p
                      style={{
                        color: "#fff",
                        margin: "5px 0",
                        fontSize: "0.9em",
                        textAlign: "center",
                      }}
                    >
                      {exp.duration}
                    </p>
                  </div>
                  <ul
                    style={{
                      color: "#ccc",
                      margin: "15px 0 20px 0",
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
                      margin: "20px 0 10px 0",
                      fontSize: "0.8em",
                      textAlign: "center",
                    }}
                  >
                    <strong className="purple">Skills:</strong> {exp.skills.join(", ")}
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
