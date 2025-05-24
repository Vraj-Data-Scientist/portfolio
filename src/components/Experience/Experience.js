import React from 'react';
import ExperienceCard from './ExperienceCard';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'AI/ML Intern',
      company: 'AtliQ Technologies Pvt. Ltd.',
      location: 'Vadodara, India',
      duration: 'Dec 2024 - Mar 2025',
      skills: [
        'PyTorch',
        'ResNet',
        'Hugging Face',
        'Transformers',
        'LLMs',
        'RAG',
        'Streamlit',
        'AWS',
        'Agile Development',
        'Teamwork',
      ],
      description: [
        'Led a team to develop two AI projects, driving communication with a cold storage firm and a healthcare company to define needs, completing a fruit freshness system and a Q&A tool using deep learning and generative AI.',
        'Spearheaded preprocessing of 16,000 fruit images and tuned a ResNet50 CNN, showcasing analytical skills to cut processing time by 30% and boost accuracy from 69.44% to 99.85%, earning recognition for impactful internship growth.',
        'Collaborated on a Streamlit-based healthcare AI tool, enhancing LLaMA 3 with RAG and retrieving PubMed data to deliver fast, evidence-based intermittent fasting insights for clinicians, improving decision-making efficiency.',
      ],
      projectTitle: 'Freshness Inspection',
      domain: 'Retail',
      projectLink: 'https://dl-project-fruits-inspection-vraj-dobariya.streamlit.app/',
    },
    // Add more experiences here if needed
  ];

  return (
    <div className="experience-container">
      <h2 className="experience-title">Experience</h2>
      {experiences.map((exp, index) => (
        <ExperienceCard
          key={index}
          title={exp.title}
          company={exp.company}
          location={exp.location}
          duration={exp.duration}
          skills={exp.skills}
          description={exp.description}
          projectTitle={exp.projectTitle}
          domain={exp.domain}
          projectLink={exp.projectLink}
        />
      ))}
    </div>
  );
};

export default Experience;
