import React, { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import { FaGraduationCap } from "react-icons/fa"; 

function AboutCard() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); 

  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    let scrollPosition = 0;
    const scrollStep = clientWidth; // Scroll by the width of one entry

    const scrollInterval = setInterval(() => {
      scrollPosition += scrollStep;
      if (scrollPosition > maxScroll) {
        scrollPosition = 0;
        setActiveIndex(0); 
      } else {
        setActiveIndex(1); 
      }
      scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }, 7000); // Change every 7 seconds

   
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

  return (
    <Card className="quote-card-view">
      <Card.Body style={{ paddingTop: "0" }}>
        <blockquote className="blockquote mb-0" style={{ marginTop: "0" }}>
          <p style={{ textAlign: "justify", fontSize: "0.9em", marginTop: "0" }}>
            I am a passionate AI/ML enthusiast with a proven track record of academic excellence, including a Gold Medal in Computer Science and a Top 15% rank in the GATE Computer Science exam, one of India's most competitive national exams. I have a strong foundation in Artificial Intelligence, Machine Learning, Deep Learning, and Data Science.
            <br /><br />
            My technical expertise spans programming languages such as{" "}
            <span style={{ fontStyle: "italic", color: "#c084f5" }}>Python</span>,{" "}
            <span style={{ fontStyle: "italic", color: "#c084f5" }}>R</span>, and{" "}
            <span style={{ fontStyle: "italic", color: "#c084f5" }}>SQL</span>, along with hands-on experience in AI/ML tools like{" "}
            <span style={{ fontStyle: "italic", color: "#c084f5" }}>Scikit-learn</span>,{" "}
            <span style={{ fontStyle: "italic", color: "#c084f5" }}>XGBoost</span>,{" "}
            <span style={{ fontStyle: "italic", color: "#c084f5" }}>PyTorch</span>,{" "}
            <span style={{ fontStyle: "italic", color: "#c084f5" }}>TensorFlow</span>,{" "}
            <span style={{ fontStyle: "italic", color: "#c084f5" }}>Keras</span>,{" "}
            <span style={{ fontStyle: "italic", color: "#c084f5" }}>spaCy</span>,{" "}
            <span style={{ fontStyle: "italic", color: "#c084f5" }}>Transformers & Diffusers (Hugging Face)</span>,{" "}
            <span style={{ fontStyle: "italic", color: "#c084f5" }}>LangChain</span>,{" "}
            <span style={{ fontStyle: "italic", color: "#c084f5" }}>FastAPI</span>,{" "}
            <span style={{ fontStyle: "italic", color: "#c084f5" }}>Streamlit</span>, and more. I am proficient in{" "}
            <span style={{ fontStyle: "italic", color: "#c084f5" }}>NLP</span>,{" "}
            <span style={{ fontStyle: "italic", color: "#c084f5" }}>Computer Vision</span>,{" "}
            <span style={{ fontStyle: "italic", color: "#c084f5" }}>ML Ops</span>,{" "}
            <span style={{ fontStyle: "italic", color: "#c084f5" }}>LLM</span>, and{" "}
            <span style={{ fontStyle: "italic", color: "#c084f5" }}>GenAI</span>, applying these skills in various academic and project-based settings to solve complex problems.
          </p>

          {/* Education Section */}
          <div style={{ marginTop: "30px", marginBottom: "100px" }}>
            <h3 style={{ fontSize: "1.5em", color: "#fff", display: "flex", alignItems: "center" }}>
              <FaGraduationCap style={{ marginRight: "10px", color: "#c084f5" }} />
              <strong className="purple">Education</strong>
            </h3>
            <div
              ref={scrollRef}
              style={{
                display: "flex",
                overflowX: "auto",
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none", 
                WebkitOverflowScrolling: "touch", 
              }}
            >
              {/* Hide scrollbar for Chrome/Safari */}
              <style>
                {`
                  div::-webkit-scrollbar {
                    display: none; /* Hide scrollbar for Chrome/Safari */
                  }
                `}
              </style>

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

            {/* Navigation Dots */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: activeIndex === 0 ? "#c084f5" : "#666",
                  margin: "0 5px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  scrollRef.current.scrollTo({
                    left: 0,
                    behavior: "smooth",
                  });
                  setActiveIndex(0);
                }}
              />
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: activeIndex === 1 ? "#c084f5" : "#666",
                  margin: "0 5px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  scrollRef.current.scrollTo({
                    left: scrollRef.current.clientWidth,
                    behavior: "smooth",
                  });
                  setActiveIndex(1);
                }}
              />
            </div>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;