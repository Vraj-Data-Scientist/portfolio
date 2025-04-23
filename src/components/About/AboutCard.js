import React, { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import { FaGraduationCap } from "react-icons/fa";

function AboutCard() {
  const scrollRef = useRef(null);
  const skillScrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [skillIndex, setSkillIndex] = useState(0);

  // Education scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
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
        setActiveIndex(0);
      } else {
        setActiveIndex(1);
      }
      scrollContainer.scrollTo({ left: scrollPosition, behavior: "smooth" });
    }, 7000);

    const handleScroll = () => {
      const newIndex = Math.round(scrollContainer.scrollLeft / clientWidth);
      setActiveIndex(newIndex);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Skill scroll effect
  useEffect(() => {
    const skillContainer = skillScrollRef.current;
    if (!skillContainer) return;

    const clientWidth = skillContainer.clientWidth;
    const scrollStep = clientWidth;

    const skillInterval = setInterval(() => {
      setSkillIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % 4;
        skillContainer.scrollTo({ left: newIndex * scrollStep, behavior: "smooth" });
        return newIndex;
      });
    }, 10000);

    return () => clearInterval(skillInterval);
  }, []);

  return (
    <Card className="quote-card-view">
      <Card.Body style={{ paddingTop: "0" }}>
        <blockquote className="blockquote mb-0" style={{ marginTop: "0" }}>
          <p style={{ textAlign: "left", fontSize: "0.9em", marginTop: "0" }}>
            I am a passionate AI/ML enthusiast with a proven track record of academic excellence, including a Gold Medal in Computer Science and a Top 15% rank in the GATE Computer Science exam, one of India's most competitive national exams. I have a strong foundation in Artificial Intelligence, Machine Learning, Deep Learning, and Data Science.
          </p>

          {/* Education Section */}
          <div style={{ marginTop: "30px" }}>
            <h3 style={{ fontSize: "1.5em", color: "#fff", display: "flex", alignItems: "center" }}>
              <FaGraduationCap style={{ marginRight: "10px", color: "#c084f5" }} />
              <strong className="purple">Education</strong>
            </h3>
            <div
              ref={scrollRef}
              style={{ display: "flex", overflowX: "auto", scrollSnapType: "x mandatory", scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
            >
              <style>{`div::-webkit-scrollbar { display: none; }`}</style>
              <div style={{ flex: "0 0 100%", scrollSnapAlign: "start", padding: "15px", minWidth: "100%" }}>
                <div style={{ padding: "10px", borderLeft: "3px solid #c084f5" }}>
                  <h4 style={{ fontSize: "1.2em", color: "#fff" }}>Bachelor of Technology in Information Technology</h4>
                  <p style={{ color: "#ccc", fontSize: "0.9em" }}>Adani University, Ahmedabad</p>
                  <p style={{ color: "#aaa", fontSize: "0.8em" }}>2018 - 2022</p>
                </div>
              </div>
              <div style={{ flex: "0 0 100%", scrollSnapAlign: "start", padding: "15px", minWidth: "100%" }}>
                <div style={{ padding: "10px", borderLeft: "3px solid #c084f5" }}>
                  <h4 style={{ fontSize: "1.2em", color: "#fff" }}>Master of Science in Statistics Data Science</h4>
                  <p style={{ color: "#ccc", fontSize: "0.9em" }}>California State University - East Bay</p>
                  <p style={{ color: "#aaa", fontSize: "0.8em" }}>2025 (Present)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div style={{ marginTop: "30px" }}>
            <h3 style={{ fontSize: "1.5em", color: "#fff" }}><strong className="purple">Skills</strong></h3>
            <div
              ref={skillScrollRef}
              style={{ display: "flex", overflowX: "auto", scrollSnapType: "x mandatory", scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
            >
              <style>{`div::-webkit-scrollbar { display: none; }`}</style>
              {[ 
                <>
                  <p><span style={{ fontStyle: "italic", color: "#c084f5" }}>Programming Languages:</span> Python, R, SQL, C, C++</p>
                  <p><span style={{ fontStyle: "italic", color: "#c084f5" }}>Databases & Vector Stores:</span> MySQL, MongoDB, ChromaDB(Vector Search)</p>
                </>,
                <>
                  <p><span style={{ fontStyle: "italic", color: "#c084f5" }}>Data Science & Analytics:</span> EDA (Numpy, Pandas, Matplotlib, Seaborn), Data Preprocessing, Feature Engineering, Hypothesis Testing, A/B Testing, Time Series Analysis, Forecasting, Big Data Technologies (Apache Spark, Hadoop), Data Visualization (Tableau, Power BI)</p>
                </>,
                <>
                  <p><span style={{ fontStyle: "italic", color: "#c084f5" }}>AI/ML Frameworks & Libraries:</span> Scikit-learn, XGBoost, PyTorch, TensorFlow, Keras, OpenCV, spaCy, NLTK, Transformers, Hugging Face, LangChain, FastAPI, Streamlit, CUDA</p>
                  <p><span style={{ fontStyle: "italic", color: "#c084f5" }}>MLOps & Deployment:</span> Docker, Kubernetes, CI/CD Pipelines, AWS, Azure, MLflow, Linux, Unix-based OS, Git</p>
                  <p><span style={{ fontStyle: "italic", color: "#c084f5" }}>AI/ML Expertise:</span> Machine Learning, Deep Learning, Computer Vision, NLP, Generative AI, LLM, RAG, Agentic Workflows, Model Fine Tuning, Model Evaluation, Prompt Engineering, Reinforcement Learning</p>
                </>,
                <>
                  <p><span style={{ fontStyle: "italic", color: "#c084f5" }}>Core CS:</span> Data Structures & Algorithms, Graph Analysis, Software Engineering (System Design, Testing, OOP), API Integration (REST, GraphQL), Agile Methodologies</p>
                </>
              ].map((item, index) => (
                <div key={index} style={{ flex: "0 0 100%", scrollSnapAlign: "start", padding: "15px", minWidth: "100%", color: "#ccc" }}>{item}</div>
              ))}
            </div>
          </div>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
