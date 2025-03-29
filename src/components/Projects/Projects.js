import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import "./Projects.css";
import Particle from "../Particle";
import projImg1 from "../../Assets/Projects/1.png";
import projImg2 from "../../Assets/Projects/2.jpeg";
import projImg3 from "../../Assets/Projects/3.png";
import projImg4 from "../../Assets/Projects/4.gif";
import projImg5 from "../../Assets/Projects/5.jpg";
import projImg6 from "../../Assets/Projects/6.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
       
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={projImg1}
              isBlog={false}
              title="Intelligent RAG E-commerce Chatbot"
              description="Developed a Streamlit-based chatbot, enhancing user experience by ~60% and revenue potential by ~40% with a conversational interface. Integrated RAG with LLaMA 3.3 (Groq), semantic routing, and real-time SQL to replace inefficient filters and FAQs, reducing API costs by ~50% using HuggingFace embeddings, ChromaDB, and quantization."
              skills="Streamlit, RAG, LLaMA, SQL, HuggingFace, ChromaDB"
              ghLink="https://github.com/Vraj-Data-Scientist/gen-ai-powered-e-commerce-chatbot"
              demoLink="https://gen-ai-powered-e-commerce-chatbot-vraj-dobariya.streamlit.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={projImg2}
              isBlog={false}
              title="RAG-Driven Real Estate Insights App"
              description="Developed a Streamlit-based web app, reducing LLM API costs by ~70% and research time by ~50% using Retrieval-Augmented Generation (RAG) for real estate insights. Enabled URL-based queries with precise answers via LangChain’s UnstructuredURLLoader, HuggingFace all-MiniLM-L6-v2 embeddings, ChromaDB retrieval, and Llama3 (Groq) with references."
              skills="Streamlit, RAG, LangChain, HuggingFace, ChromaDB, Llama3"
              ghLink="https://github.com/Vraj-Data-Scientist/real-estate-assistant-using-RAG"
              demoLink="https://real-estate-assistant-using-rag-vraj-dobariya.streamlit.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={projImg3}
              isBlog={false}
              title="Finance Credit Risk Predictor"
              description="Developed a Logistic Regression model for credit risk, achieving 93% accuracy and 94% recall by addressing class imbalance with SMOTE Tomek and optimizing via Optuna. Predicts loan default probability, assigns credit scores (300-900), and rates creditworthiness for finance applications."
              skills="Logistic Regression, SMOTE, Optuna, Python"
              ghLink="https://github.com/Vraj-Data-Scientist/credit-risk-prediction-model"
              demoLink="https://ml-project-credit-risk-model-vraj-dobariya.streamlit.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={projImg4}
              isBlog={false}
              title="Damage Prediction CNN Model"
              description="Built a deep learning model with CNNs and transfer learning, improving accuracy from 57.74% to 80.87% using EfficientNet, ResNet fine-tuning, and hyperparameter optimization (dropout: 0.2, learning rate: 0.005). Applied regularization and computer vision techniques for robust damage prediction."
              skills="CNN, EfficientNet, ResNet, Computer Vision, Python"
              ghLink="https://github.com/Vraj-Data-Scientist/dl-project-damage-prediction"
              demoLink="https://dl-project-damage-prediction-vraj-dobariya.streamlit.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={projImg5}
              isBlog={false}
              title="Credit Card A/B Testing Analytics"
              description="Analyzed customer data with EDA to target 18-25-year-olds for a credit card launch in banking. Conducted A/B testing, rejecting the null hypothesis, proving higher engagement and uptake with the new card compared to the existing one."
              skills="EDA, A/B Testing, Statistics, Python"
              ghLink="https://github.com/Vraj-Data-Scientist/credit-card-launch-EDA-ABtesting"
              demoLink=""
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={projImg6}
              isBlog={false}
              title="Predictive Health Insurance Model"
              description="Built a machine learning model to predict health insurance premiums using personal and medical data. Achieved 98.87% accuracy for ages ≤ 25 with Linear Regression and 99.70% for ages > 25 with XGBoost, optimized via Random Search Tuning."
              skills="Linear Regression, XGBoost, Random Search, Python"
              ghLink="https://github.com/Vraj-Data-Scientist/health-insurance-premium-prediction"
              demoLink="https://ml-project-premium-prediction-vraj-dobariya.streamlit.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;