import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Vraj Dobariya_resume_DS.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [pageHeight, setPageHeight] = useState(0);

  const onLoadSuccess = ({ numPages, width, height }) => {
    setPageHeight(height); 
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

       
        <Row
          className="resume"
          style={{
            minHeight: pageHeight,
            overflow: "hidden", 
          }}
        >
          <Document file={pdf} onLoadSuccess={onLoadSuccess} className="d-flex justify-content-center">
            <Page
              pageNumber={1}
              scale={width > 786 ? 1.7 : 0.6}
              
              renderTextLayer={false}
            />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
