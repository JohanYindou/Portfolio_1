import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import CV from '../../assets/CV_Johan_Yindou Alternance.pdf';
import CV1 from '../../assets/CV_Johan_Yindou Master.pdf';



function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className='resume-section'>
        <Particle />
        <h2 className='fw-bold'>CV pour les entreprises</h2>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant='primary'
            href={CV}
            target='_blank'
            style={{ maxWidth: '250px' }}>
            <AiOutlineDownload />
            &nbsp;Télécharger mon CV
          </Button>
        </Row>
        <Row className='resume'>
          <Document file={CV} className='d-flex justify-content-center'>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
        <h2 className='fw-bold'>CV pour les écoles et formations</h2>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant='primary'
            href={CV1}
            target='_blank'
            style={{ maxWidth: '250px' }}>
            <AiOutlineDownload />
            &nbsp;Télécharger mon CV
          </Button>
        </Row>
        <Row className='resume'>
          <Document file={CV1} className='d-flex justify-content-center'>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
