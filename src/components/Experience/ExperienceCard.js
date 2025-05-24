import React, { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaBriefcase } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

function ExperienceCard() {
  const experienceScrollRef = useRef(null);
  const [activeExperienceIndex, setActiveExperienceIndex] = useState(0);

  // Experience Scroll Effect
  useEffect(() => {
    const scrollContainer = experienceScrollRef.current;
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
        setActiveExperienceIndex(0);
      } else {
        setActiveExperienceIndex(1);
      }
      scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }, 7000);

    const handleScroll = () => {
      const newIndex = Math.round(scrollContainer.scrollLeft / clientWidth);
      setActiveExperienceIndex(newIndex);
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const experiences = [
    {
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
     
      workLink: "https://dl-project-fruits-inspection-vraj-dobariya.streamlit.app/",
    },
    
  ];

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
              ref={experienceScrollRef}
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

              {experiences.map((exp, index) => (
                <div
                  key={index}
                  style={{
                    flex: "0 0 100%",
                    scrollSnapAlign: "start",
                    padding: "15px",
                    minWidth: "100%",
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
                      {exp.title}
                    </h4>
                    <p
                      style={{ color: "#ccc", margin: "0", fontSize: "0.9em" }}
                    >
                      {exp.company}
                    </p>
                    <p
                      style={{ color: "#aaa", margin: "0", fontSize: "0.8em" }}
                    >
                      {exp.location} | {exp.duration}
                    </p>
                    <p
                      style={{
                        color: "#ccc",
                        margin: "15px 0 10px 0",
                        fontSize: "0.8em",
                      }}
                    >
                      <strong>Skills:</strong> {exp.skills.join(", ")}
                    </p>
                    <ul
                      style={{
                        color: "#ccc",
                        margin: "10px 0",
                        paddingLeft: "20px",
                        fontSize: "0.8em",
                        listStyleType: "disc",
                        wordSpacing: "2px",
                        lineHeight: "1.5",
                      }}
                    >
                      {exp.description.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                    <p
                      style={{
                        color: "#ccc",
                        margin: "10px 0 15px 0",
                        fontSize: "0.8em",
                      }}
                    >
                      <strong>Project:</strong> {exp.projectTitle} ({exp.domain})
                    </p>
                    <Button
                      variant="primary"
                      href={exp.workLink}
                      target="_blank"
                      style={{ fontSize: "0.8em" }}
                    >
                      <CgWebsite style={{ marginRight: "5px" }} />
                      Application Link
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Experience Navigation Dots */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
              {experiences.map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: activeExperienceIndex === index ? "#c084f5" : "#666",
                    margin: "0 5px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    experienceScrollRef.current.scrollTo({
                      left: index * experienceScrollRef.current.clientWidth,
                      behavior: "smooth",
                    });
                    setActiveExperienceIndex(index);
                  }}
                />
              ))}
            </div>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
