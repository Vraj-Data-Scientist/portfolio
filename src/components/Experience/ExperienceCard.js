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
        "XGBoost",
        "Flask API",
        "Docker",
        "AWS EC2",
        "LLMs",
        "RAG",
        "Streamlit",
        "Teamwork",
      ],
      description: [
        "Led a cross-functional team engaging stakeholders across healthcare, fraud detection, and generative AI domains to align solutions with business goals, driving communication that expedited delivery and improved domain impact.",
        "Developed an XGBoost model for diabetic readmission prediction, achieving 0.859 ROC-AUC using ADASYN and GridSearchCV, deploying a Flask API with Docker to cut EHR integration time 40% and boost hospital efficiency 25%.",
        "Engineered a real-time fraud alert system leveraging XGBoost on 99.7% imbalanced data, capturing fraud cases with 0.9926 AUPRC, deploying low-latency Flask API on AWS EC2, validated via transaction simulations.",
        "Built an intelligent chatbot using Retrieval-Augmented Generation with LLaMA 3.3 and ChromaDB, increasing user engagement 60% and revenue potential 40%, integrating semantic routing and real-time SQL queries to optimize response times and experience.",
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
                        color: "#c084f5",
                        margin: "2px 0",
                        textAlign: "center",
                      }}
                    >
                      {exp.title}
                    </h4>
                    <p
                      style={{
                        color: "#c084f5",
                        margin: "2px 0",
                        fontSize: "0.9em",
                        textAlign: "center",
                      }}
                    >
                      {exp.company}
                    </p>
                    <p
                      style={{
                        color: "#fff",
                        margin: "2px 0",
                        fontSize: "0.9em",
                        textAlign: "center",
                      }}
                    >
                      {exp.location}
                    </p>
                    <p
                      style={{
                        color: "#fff",
                        margin: "2px 0",
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
