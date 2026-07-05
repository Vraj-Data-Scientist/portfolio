import React from "react";
import Card from "react-bootstrap/Card";
import { FaBriefcase } from "react-icons/fa";

function ExperienceCard() {
  const experiences = [
    {
      title: "AI/Data Intern",
      company: "AtliQ Technologies Pvt. Ltd.",
      location: "India (Remote)",
      duration: "Dec 2024 - May 2025",
      skills: [
        "XGBoost",
        "Fast API",
        "Docker",
        "AWS EC2",
        "LLMs",
        "RAG",
        "ChromaDB",
        "Teamwork",
      ],
      description: [
        "Collaborated with a cross-functional team engaging stakeholders across healthcare and generative AI domains to align solutions with business goals, driving communication that expedited delivery and improved domain impact.",
        "Engineered an intelligent chatbot using RAG with LLaMA 3.3 and ChromaDB, increasing user engagement 60% and revenue potential 40%, integrating semantic routing and real-time SQL queries to optimize response times and experience.",
        "Built a hybrid BioBERT + Logistic Regression model for medical transcription, achieving 79.5% accuracy via SMOTE and SynonymAug, reduced manual effort by 50%, cut misclassifications by 25%, and ensured reliable, scalable EHR support.",
      ],
    },
    {
      title: "Data Scientist",
      company: "Accenture in India",
      location: "Bengaluru, Karnataka, India",
      duration: "Jan 2022 - Jan 2024",
      skills: [
        "Scikit-learn",
        "XGBoost",
        "SMOTE",
        "Optuna",
        "FastAPI",
        "Docker",
        "SQL",
        "A/B Testing",
        "Teamwork",
      ],
      description: [
        "Collaborated with business stakeholders and cross-functional teams to identify analytical opportunities, translate requirements into scalable data science solutions, and drive data-informed decision-making to improve operational efficiency.",
        "Developed a Logistic Regression credit risk model, achieving 94% recall using SMOTE-Tomek and Optuna; reduced false negatives by 15%, generated scalable credit scores, and deployed a FastAPI service with Docker.",
        "Developed a Health Insurance Premium Prediction model using Linear Regression and XGBoost, achieving 15% error reduction using StandardScaler and Random Search Tuning, stored artifacts in S3 bucket, and deployed a FastAPI service with Docker on AWS SageMaker and EC2.",
        "Analyzed customer data with EDA to target 18-25-year-olds for a credit card launch in banking. Conducted A/B testing, rejecting the null hypothesis, proving higher engagement and uptake with the new card compared to the existing one.",
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
