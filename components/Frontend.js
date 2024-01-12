import React from 'react';
import Navbar from './NavBar';
import { Col, Row, Container, Spinner } from 'react-bootstrap';
import './Frontend.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Footer from './Footer';

const Frontend = () => {
  const [htmlOpen, setHtmlOpen] = useState(false);
  const [cssOpen, setCssOpen] = useState(false);
  const [JsOpen, setJsOpen] = useState(false);
  const [JqueryOpen, setJqueryOpen] = useState(false);
  const bg = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    height: '100vh',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={bg}>
      <Navbar />
      <br />
      <div>
        <Container className='mt-5'>
          <br></br>
          <h2 className='title' style={{ textAlign: 'center', width: '100%' }}>
            FS
          </h2>
          <Row>
            <Col xs={6} md={6}>
              <div className="d-flex align-items-center">
                <Button
                  onClick={() => setHtmlOpen(!htmlOpen)}
                  aria-controls='example-collapse-text'
                  aria-expanded={htmlOpen}
                  variant="primary"
                  style={{ color: 'white' }}
                >
                  HTML
                </Button>
              </div>
              <br></br>
              <Collapse in={htmlOpen} dimension="width">
                <div id="example-collapse-text">
                  <Card body style={{ width: '200px', textAlign: 'center' }}>
                    <Card.Text>Hyper Text Markup Language</Card.Text>
                    {htmlOpen && <Spinner animation="grow" variant="primary" />}
                    <br></br>
                    <Button variant="primary" href='https://www.w3schools.com/html/'>HTML</Button>
                  </Card>
                </div>
              </Collapse>
            </Col>
            <Col xs={6} md={6}>
              <div className="d-flex align-items-center">
                <Button
                  onClick={() => setCssOpen(!cssOpen)}
                  aria-controls='example'
                  aria-expanded={cssOpen}
                  variant="primary"
                  style={{ color: 'white' }}
                >
                  CSS
                </Button>
              </div>
              <br></br>
              <Collapse in={cssOpen} dimension="width">
                <div id="example-collapse-text">
                  <Card body style={{ width: '200px', textAlign: 'center' }}>
                    <Card.Text>Cascading Style sheet</Card.Text>
                    {cssOpen && <Spinner animation="grow" variant="secondary" />}
                    <br></br>
                    <Button variant="primary" href='https://www.w3schools.com/css/default.asp'>CSS</Button>
                  </Card>
                </div>
              </Collapse>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <div className="d-flex align-items-center">
                <Button
                  onClick={() => setJsOpen(!JsOpen)}
                  aria-controls='example'
                  aria-expanded={JsOpen}
                  variant="primary"
                  style={{ color: 'white' }}
                >
                  JS
                </Button>
              </div>
              <br></br>
              <Collapse in={JsOpen} dimension="width">
                <div id="example-collapse-text">
                  <Card body style={{ width: '200px', textAlign: 'center' }}>
                    <Card.Text>Javascript</Card.Text>
                    {JsOpen && <Spinner animation="grow" variant="danger" />}
                    <br></br>
                    <Button variant="primary" href='https://youtu.be/8dWL3wF_OMw?feature=shared'>JS</Button>
                  </Card>
                </div>
              </Collapse>
            </Col>
            <Col xs={6} md={6}>
              <div className="d-flex align-items-center">
                <Button
                  onClick={() => setJqueryOpen(!JqueryOpen)}
                  aria-controls='example'
                  aria-expanded={JqueryOpen}
                  variant="primary"
                  style={{ color: 'white' }}
                >
                  Jquery
                </Button>
              </div>
              <br></br>
              <Collapse in={JqueryOpen} dimension="width">
                <div id="example-collapse-text">
                  <Card body style={{ width: '200px', textAlign: 'center' }}>
                    <Card.Text>jquery</Card.Text>
                    {JqueryOpen && <Spinner animation="grow" variant="success" />}
                    <br></br>
                    <Button variant="primary" href='https://www.w3schools.com/jquery/default.asp'>Jquery</Button>
                  </Card>
                </div>
              </Collapse>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ position: 'fixed', bottom: 0, width: '100%' ,height:'10%' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Frontend;
