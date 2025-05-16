import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Vraj Dobariya_resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Use a local worker script or a reliable CDN
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [pageHeight, setPageHeight] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Handle window width and SSR
  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    // Set initial width
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      window.addEventListener("resize", updateWidth);
    }

    // Cleanup
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateWidth);
      }
    };
  }, []);

  // Handle PDF load success
  const onLoadSuccess = ({ numPages, originalWidth, originalHeight }) => {
    setPageHeight(originalHeight);
    setLoading(false);
  };

  // Handle PDF load error
  const onLoadError = (error) => {
    console.error("Error loading PDF:", error);
    setError(error.message);
    setLoading(false);
  };

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
            <AiOutlineDownload /> Download CV
          </Button>
        </Row>

        <Row
          className="resume"
          style={{
            minHeight: pageHeight,
            overflow: "hidden",
          }}
        >
          {loading && <p>Loading resume...</p>}
          {error && <p style={{ color: "red" }}>Error: {error}</p>}
          {!loading && !error && (
            <Document
              file={pdf}
              onLoadSuccess={onLoadSuccess}
              onLoadError={onLoadError}
              onSourceError={onLoadError}
              className="d-flex justify-content-center"
            >
              <Page
                pageNumber={1}
                scale={width > 786 ? 1.7 : 0.6}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
