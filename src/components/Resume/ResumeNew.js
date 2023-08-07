import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Main_Resume_Guvi.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;



const resumeLink =
  "https://raw.githubusercontent.com/rishabhkumar3387/portfolio/master/src/Assets/Main_Resume_Guvi.pdf";


function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>

       
            <br />
            <br />
            <br />
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "700px" }}
          >
            
            <AiOutlineDownload />
            &nbsp;Download And See My Resume
          </Button>
        </Row>

        
        <br />
            <br />
            <br />
             
            <br />
            <br />
            <br />
             
            <br />
            <br />
            <br />
             
    
             
            <br />
            <br />
            <br />
          
            <br />
            <br />
            <br />
             
            <br />
            <br />
            <br />
             
            <br />
            <br />
            <br />
      
      </Container>
    </div>
  );
}



export default ResumeNew;
