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
import projImg7 from "../../Assets/Projects/7.png"; // Placeholder for Telecom Customer Churn Prediction
import projImg8 from "../../Assets/Projects/8.png"; // Placeholder for Predicting Hospital Readmission
import projImg9 from "../../Assets/Projects/9.png"; // Placeholder for Medical Text Analysis
import projImg10 from "../../Assets/Projects/10.png"; // Placeholder for A/B Testing for Drug Marketing
import projImg11 from "../../Assets/Projects/11.png"; // Placeholder for Customer Segmentation
import projImg12 from "../../Assets/Projects/12.png"; // Placeholder for Fraud Detection Model
import projImg13 from "../../Assets/Projects/13.png"; // Placeholder for Auto Loan Delinquency Forecasting
import projImg14 from "../../Assets/Projects/14.png"; // Placeholder for Real-Time Fraud Alert System

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
              skills="Linear Regression, XGBoost, Python"
              ghLink="https://github.com/Vraj-Data-Scientist/health-insurance-premium-prediction"
              demoLink="https://ml-project-premium-prediction-vraj-dobariya.streamlit.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={projImg7}
              isBlog={false}
              title="Telecom Customer Churn Prediction"
              description="Built a Stacking Classifier with Logistic Regression and CatBoost for telecom churn, achieving 86% recall via SMOTETomek and threshold tuning; reduced false negatives by 15%, boosting retention campaign efficiency by 20% through scalable, optimized predictions."
              skills="Scikit-learn, XGBoost, CatBoost, SMOTETomek, GridSearchCV, EDA, Feature Engineering, Data Preprocessing, Threshold Tuning"
              ghLink="https://github.com/Vraj-Data-Scientist/telecom-customer-churn-prediction"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={projImg8}
              isBlog={false}
              title="Predicting Hospital Readmission for Diabetic Patients"
              description="Built an XGBoost model for 30-day diabetic readmissions, achieving 70% recall and 0.859 ROC-AUC via ADASYN and RFE; deployed with Flask & Docker, reduced EHR integration by 40% and improved hospital efficiency by 25%, aligning with HRRP clinical standards."
              skills="XGBoost, LightGBM, Decision Trees, Flask API, Docker, Tableau, Scikit-learn, Feature Engineering, Data Preprocessing, ADASYN, GridSearchCV, Seaborn, Matplotlib"
              ghLink="https://github.com/Vraj-Data-Scientist/prediction-on-hospital-readmission"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={projImg9}
              isBlog={false}
              title="Medical Text Analysis for Diagnosis Support"
              description="Built a hybrid BioBERT + Logistic Regression model for medical transcription, achieving 79.5% accuracy and 0.78 F1 via SMOTE and SynonymAug; reduced manual effort by 50%, cut misclassifications by 25%, and ensured reliable, scalable EHR support for 13 specialties."
              skills="BioBERT, Logistic Regression, TF-IDF, SMOTE, SynonymAug, Scikit-learn, NLTK, Transformers, Feature Engineering, Text Preprocessing, GridSearchCV, Matplotlib, Seaborn"
              ghLink="https://github.com/Vraj-Data-Scientist/medical-text-analysis-for-diagnosis-support"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={projImg10}
              isBlog={false}
              title="A/B Testing for Drug Marketing Campaigns"
              description="Built an A/B testing pipeline for 65+ prescription campaigns, achieving 1.52 odds ratio (P=0.0092) via t-tests/ANOVA; engineered features with IQR filtering and Snowflake-ready code, cutting decision uncertainty by 30% and boosting interpretability by 20%."
              skills="Python, Pandas, NumPy, SciPy, Matplotlib, Seaborn, A/B Testing, Statistical Analysis, Data Preprocessing, Feature Engineering, Snowflake, T-Test, ANOVA, Visualization"
              ghLink="https://github.com/Vraj-Data-Scientist/a-b-testing-for-drug-marketing-campaigns"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={projImg11}
              isBlog={false}
              title="Customer Segmentation for Auto Finance Marketing"
              description="Built a K-Means model on 1M+ transactions using RFM analysis (k=5 via elbow method), boosting campaign precision by 35%; engineered 6 scaled features with IQR capping and PCA, reducing design time by 40% and improving interpretability by 25% with SQL/SAS."
              skills="Scikit-learn, K-Means Clustering, RFM Analysis, Feature Engineering, PCA, SAS, JMP, SQL"
              ghLink="https://github.com/Vraj-Data-Scientist/customer-segmentation-for-auto-finance-marketing"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={projImg12}
              isBlog={false}
              title="Fraud Detection Model for Transaction Data"
              description="Developed a fraud detection system on 99.83% imbalanced data using SMOTE and under-sampling, achieving 94.45% accuracy and 0.977 ROC-AUC with Logistic Regression and TensorFlow NN (98.8% accuracy); optimized with GridSearchCV, t-SNE/PCA, and IQR for robust rare fraud detection."
              skills="Python, Scikit-learn, Pandas, NumPy, SMOTE, Cross-Validation, Data Preprocessing"
              ghLink="https://github.com/YourUsername/fraud-detection-model-for-transaction-data"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={projImg13}
              isBlog={false}
              title="Auto Loan Delinquency Rate Forecasting"
              description="Developed ARIMA and Prophet models forecasting auto loan delinquency with 10.6% MAPE and 2.13% MAE, integrating FRED macroeconomic data and seasonal decomposition; optimized 20+ ARIMA variants via AIC, reducing error 30% and improving subprime lending risk management."
              skills="Time Series Forecasting, ARIMA, Prophet, FRED API, Seasonal Decomposition, AIC, Trend Analysis"
              ghLink="https://github.com/Vraj-Data-Scientist/loan-delinquency-rate-forecasting-arima-prophet"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={projImg14}
              isBlog={false}
              title="Real-Time Fraud Alert System with API Deployment"
              description="Built an XGBoost fraud detection model on 99.7% imbalanced data, achieving 0.9926 AUPRC and detecting 50% zero-balance fraud with errorBalance features; deployed Flask API on AWS EC2 for real-time prediction, validated with samples, and visualized fraud via 3D plots and heatmaps."
              skills="XGBoost, Pandas, NumPy, Flask API, AWS EC2, Feature Engineering, Matplotlib, Seaborn"
              ghLink="https://github.com/Vraj-Data-Scientist/real-time-fraud-alert-system"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
