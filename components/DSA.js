import React, { useEffect } from 'react';
import { Card, Button, Container, Row, Col ,Image } from 'react-bootstrap';
import $ from 'jquery';
import './DSA.css'
import Navbar from './NavBar';
import Footer from './Footer';

const DSA = () => {
  const bg = {
    display: 'flex',
    backgroundImage: 'url("https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  };

  const center = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '40vh',
    color: 'white',
    gap: '20px',
    flexWrap: 'wrap',
  };

  useEffect(() => {
    const handleMouseOver = () => {
      $('.cProgram').fadeIn();
    };

    const handleMouseOut = () => {
      $('.cProgram').fadeIn();
    };

    $('#Cprogram').mouseover(handleMouseOver).mouseout(handleMouseOut);

    return () => {
      $('#Cprogram').off('mouseover', handleMouseOver);
      $('#Cprogram').off('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div style={bg}>
      <Navbar />

      <Container className='mt-5'>
        <br></br>
        <h1 style={{ textAlign: 'center', color: 'red' }} id='Cprogram'>
          DSA
        </h1>
        <span style={{ display: 'block', textAlign: 'center', color: 'red' ,fontSize:"25px",fontWeight:"solid" }}>Place MouseOver DSA</span>
        <div style={center}>
        <Image
        src="https://media.tenor.com/6JptszQgCnkAAAAj/text-work.gif"
        alt="Centered Image"
        className="centered-image"
        fluid
        style={{ width: '100px', height: '120px',
        position: 'absolute',
        top: '10',
        left:'0',
        zIndex: '1',}}
      />
          <Card border='primary' borderWidth='40px' className="cProgram" style={{ display: 'none', textAlign: 'center', backgroundImage: ' linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)'  }}>
            <Card.Body>
              <div>
                <Card.Title >DS</Card.Title>
                <Card.Text >Data structures are a way of organizing data in a computer so that it can be used efficiently. There are many different types of data structures, each with its own advantages and disadvantages.</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </div>
        <Row style={center}>
          {/* Card 1 - Stack */}
          <Col>
            <Card border='primary' borderWidth='40px' className='cProgram' style={{ display: 'none', textAlign: 'center', backgroundImage: ' linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)' ,width:'150px'  }}>
              <Card.Body>
                <div>
                  <Card.Title>Stack & Queue</Card.Title>
                  <Card.Text>Clickme</Card.Text>
                  <Button variant='primary' href='https://youtu.be/rHQI4mrJ3cg?feature=shared'>
                    Docs
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 - Array */}
          <Col>
            <Card border='warning' borderWidth='40px' className='cProgram' style={{ display: 'none', textAlign: 'center', backgroundImage: 'linear-gradient(90deg, #efd5ff 0%, #515ada 100%)' ,width:'150px' }}>
              <Card.Body>
                <div>
                  <Card.Title style={{ color: 'white' }}>Array</Card.Title>
                  <Card.Text>Clickme</Card.Text>
                  <Button variant='primary' href=' https://youtu.be/n60Dn0UsbEk?feature=shared'>
                    Docs
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 - Linked List */}
          <Col>
            <Card border='success' borderWidth='40px' className='cProgram' style={{ display: 'none', textAlign: 'center', backgroundImage: 'linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)' ,width:'150px' }}>
              <Card.Body>
                <div>
                  <Card.Title style={{ color: 'white' }}>Linked List</Card.Title>
                  <Card.Text>Clickme</Card.Text>
                  <Button variant='primary' href=' https://youtu.be/58YbpRDc4yw?feature=shared'>
                    Docs
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 4 - Math */}
          <Col>
            <Card border='secondary' borderWidth='40px' className='cProgram' style={{ display: 'none', textAlign: 'center', backgroundImage: ' linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)' ,width:'150px' }}>
              <Card.Body>
                <div>
                  <Card.Title style={{ color: 'white' }}>Tree</Card.Title>
                  <Card.Text>Clickme</Card.Text>
                  <Button variant='primary' href='https://youtu.be/fzip9Aml6og?feature=shared'>
                    Docs
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 5 - Tree */}
          {/* <Col>
            <Card border='primary' borderWidth='40px' className='cProgram' style={{ display: 'none', textAlign: 'center', backgroundImage: ' linear-gradient(90deg, #004ff9 0%, #fff94c 100%)' }}>
              <Card.Body>
                <div>
                  <Card.Title style={{ color: 'white' }}>Tree</Card.Title>
                  <Card.Text>Clickme</Card.Text>
                  <Button variant='primary' href=' https://youtube.com/playlist?list=PL9gnSGHSqcnqfctdbCQKaw5oZ9Up2cmsq&feature=shared'>
                    Documentation
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
        <br />
      </Container>
      <div  style={{ position: 'fixed', bottom: 0, width: '100%' ,height:'10%' }} >
        <Footer/>
      </div>
    </div>
  );
};

export default DSA;
// This should resolve the issue and make all the cards in the same row without fixed widths.
