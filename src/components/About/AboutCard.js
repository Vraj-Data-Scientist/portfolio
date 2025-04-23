import React, { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import { FaGraduationCap, FaCode } from "react-icons/fa"; 

function AboutCard() {
  const educationScrollRef = useRef(null);
  const [activeEducationIndex, setActiveEducationIndex] = useState(0); 

  // Education Scroll Effect
  useEffect(() => {
    const scrollContainer = educationScrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    let scrollPosition = 0;
    const scrollStep = clientWidth;

    const scrollInterval = setInterval(() => {
      scrollPosition += scrollStep;
      if (scrollPosition > maxScroll) {
        scrollPosition = 0;
        setActiveEducationIndex(0); 
      } else {
        setActiveEducationIndex(1); 
      }
      scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }, 7000);

    const handleScroll = () => {
      const newIndex = Math.round(scrollContainer.scrollLeft / clientWidth);
      setActiveEducationIndex(newIndex);
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(scrollInterval); 
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Card className="quote-card-view">
      <Card.Body style={{ paddingTop: "0" }}>
        <blockquote className="blockquote mb-0" style={{ marginTop: "0" }}>
          <p style={{ textAlign: "left", fontSize: "0.9em", marginTop: "0" }}>
            I am a passionate AI/ML enthusiast with a proven track record of academic excellence, including a Gold Medal in Computer Science and a Top 15% rank in the GATE Computer Science exam, one of India's most competitive national exams. I have a strong foundation in Artificial Intelligence, Machine Learning, Deep Learning, and Data Science.
            <br /><br />
          </p>

          {/* Education Section */}
          <div style={{ marginTop: "30px", marginBottom: "100px" }}>
            <h3 style={{ fontSize: "1.5em", color: "#fff", display: "flex", alignItems: "center" }}>
              <FaGraduationCap style={{ marginRight: "10px", color: "#c084f5" }} />
              <strong className="purple">Education</strong>
            </h3>
            <div
              ref={educationScrollRef}
              style={{
                display: "flex",
                overflowX: "auto",
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none", 
                WebkitOverflowScrolling: "touch", 
              }}
            >
              <style jsx>{`
                div {
                  scrollbar-width: none;
                }
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              {/* Bachelor's Degree */}
              <div
                style={{
                  flex: "0 0 100%",
                  scrollSnapAlign: "start",
                  padding: "15px",
                  minWidth: "100%",
                }}
              >
                <div style={{ padding: "10px", borderLeft: "3px solid #c084f5" }}>
                  <h4 style={{ fontSize: "1.2em", color: "#fff", marginBottom: "5px" }}>
                    Bachelor of Technology in Information Technology
                  </h4>
                  <p style={{ color: "#ccc", margin: "0", fontSize: "0.9em" }}>
                    Adani University, Ahmedabad
                  </p>
                  <p style={{ color: "#aaa", margin: "0", fontSize: "0.8em" }}>
                    2018 - 2022
                  </p>
                </div>
              </div>

              {/* Master's Degree */}
              <div
                style={{
                  flex: "0 0 100%",
                  scrollSnapAlign: "start",
                  padding: "15px",
                  minWidth: "100%",
                }}
              >
                <div style={{ padding: "10px", borderLeft: "3px solid #c084f5" }}>
                  <h4 style={{ fontSize: "1.2em", color: "#fff", marginBottom: "5px" }}>
                    Master of Science in Statistics Data Science
                  </h4>
                  <p style={{ color: "#ccc", margin: "0", fontSize: "0.9em" }}>
                    California State University - East Bay, California
                  </p>
                  <p style={{ color: "#aaa", margin: "0", fontSize: "0.8em" }}>
                    2025 (Present)
                  </p>
                </div>
              </div>
            </div>

            {/* Education Navigation Dots */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: activeEducationIndex === 0 ? "#c084f5" : "#666",
                  margin: "0 5px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  educationScrollRef.current.scrollTo({
                    left: 0,
                    behavior: "smooth",
                  });
                  setActiveEducationIndex(0);
                }}
              />
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: activeEducationIndex === 1 ? "#c084f5" : "#666",
                  margin: "0 5px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  educationScrollRef.current.scrollTo({
                    left: educationScrollRef.current.clientWidth,
                    behavior: "smooth",
                  });
                  setActiveEducationIndex(1);
                }}
              />
            </div>
          </div>

          {/* Skills Section */}
          <div style={{ marginTop: "30px", marginBottom: "100px" }}>
            <h3 style={{ fontSize: "1.5em", color: "#fff", display: "flex", alignItems: "center" }}>
              <FaCode style={{ marginRight: "10px", color: "#c084f5" }} />
              <strong className="purple">Skills</strong>
            </h3>
            <div style={{ padding: "15px", textAlign: "center" }}>
              <div style={{ padding: "10px", borderLeft: "3px solid #c084f5" }}>
                <h4 style={{ fontStyle: "italic", color: "#c084f5", marginBottom: "5px" }}>
                  Programming Languages
                </h4>
                <p style={{ color: "#ccc", margin: "0 0 15px 0", fontSize: "0.9em" }}>
                  Python, R, SQL, C, C++
                </p>
                <h4 style={{ fontStyle: "italic", color: "#c084f5", marginBottom: "5px" }}>
                  Databases & Vector Stores
                </h4>
                <p style={{ color: "#ccc", margin: "0 0 15px 0", fontSize: "0.9em" }}>
                  MySQL, MongoDB, ChromaDB (Vector Search)
                </p>
                <h4 style={{ fontStyle: "italic", color: "#c084f5", marginBottom: "5px" }}>
                  AI/ML Frameworks & Libraries
                </h4>
                <p style={{ color: "#ccc", margin: "0 0 15px 0", fontSize: "0.9em" }}>
                  Scikit-learn, XGBoost, PyTorch, TensorFlow, Keras, OpenCV, spaCy, NLTK, Transformers, Hugging Face, LangChain, FastAPI, Streamlit, CUDA
                </p>
                <h4 style={{ fontStyle: "italic", color: "#c084f5", marginBottom: "5px" }}>
                  MLOps & Deployment
                </h4>
                <p style={{ color: "#ccc", margin: "0 0 15px 0", fontSize: "0.9em" }}>
                  Docker, Kubernetes, CI/CD Pipelines, AWS, Azure, MLflow, Linux, Unix-based OS, Git
                </p>
                <h4 style={{ fontStyle: "italic", color: "#c084f5", marginBottom: "5px" }}>
                  AI/ML Expertise
                </h4>
                <p style={{ color: "#ccc", margin: "0 0 15px 0", fontSize: "0.9em" }}>
                  Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Generative AI, LLM, RAG, Agentic Workflows, Model Fine Tuning (Transfer Learning), Model Evaluation, Prompt Engineering, Reinforcement Learning
                </p>
                <h4 style={{ fontStyle: "italic", color: "#c084f5", marginBottom: "5px" }}>
                  Data Science & Analytics
                </h4>
                <p style={{ color: "#ccc", margin: "0 0 15px 0", fontSize: "0.9em" }}>
                  EDA (Numpy, Pandas, Matplotlib, Seaborn), Data Preprocessing, Feature Engineering, Hypothesis Testing, A/B Testing, Time Series Analysis, Forecasting, Big Data Technologies (Apache Spark, Hadoop), Data Visualization (Tableau, Power BI)
                </p>
                <h4 style={{ fontStyle: "italic", color: "#c084f5", marginBottom: "5px" }}>
                  Core CS
                </h4>
                <p style={{ color: "#ccc", margin: "0 0 15px 0", fontSize: "0.9em" }}>
                  Data Structures & Algorithms, Graph Analysis, Software Engineering (System Design, Testing, OOP), API Integration (REST, GraphQL), Agile Methodologies
                </p>
              </div>
            </div>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
