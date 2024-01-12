import React, { useState } from 'react';
import { Card, Container, Row, Col, Collapse } from 'react-bootstrap';
import NavBar from './NavBar';
import Button from 'react-bootstrap/Button';
import './Mern.css'


const Mern = () => {
    const [ReactOpen ,setReactOpen] = useState(false);
    const [NodeOpen , setNodeOpen]  = useState(false);
    const [ExpressOpen , setExpressOpen]  = useState(false);
    const [MongoOpen , setMongoOpen]  = useState(false);

    const bg = {
      backgroundImage: 'url("https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=900&t=st=1704590254~exp=1704590854~hmac=6a530c024588d977353beb64a211b84d46b23e1a9e28c86f620e9d59dab8e5e2")',
      backgroundSize: '100% 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
    }
    // const center = {
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   minHeight: '100%',
    //   color: 'white',
    //   gap: '20px',
    //   flexWrap: 'wrap',
    // };

    
  return (
    <div style={bg}>
      <NavBar />
      <br />
      <Container className='mt-5'>
        <br></br>
        <h2 className='title' style={{ textAlign: 'center', width: '100%' }}>
            Mern
          </h2>
          <br></br>
        <Row>
            <Col xs={6} md={6}>
                <div className='d-flex align-items-center '>
                <Button
                onClick={()=> setReactOpen(!ReactOpen)}
                aria-controls='ReactCard'
                aria-expanded={ReactOpen}
                variant='primary'
                style={{color: 'white'}}
                >
                     React
                </Button>
                </div>
                <br></br>
                <Collapse in={ReactOpen} dimension="width">
        <div id='ReactCard'>
              <Card className='hover-card'
                style={{
                  background:
                    'radial-gradient(circle, rgba(175, 238, 174, 1) 48%, rgba(148, 187, 233, 1) 100%)',
                  width: '150px',
                 textAlign: 'center'
                }}
              >
                <Card.Body>
                  <Card.Text>React</Card.Text>
                  <Button href='https://youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&feature=shared'>Docs</Button>
                </Card.Body>
              </Card>
                  
        </div>
                </Collapse >
            </Col>
            <Col xs={6} md={6}>
                <div className='d-flex align-items-center '>
                <Button
                onClick={()=> setNodeOpen(!NodeOpen)}
                aria-controls='NodeCard'
                aria-expanded={NodeOpen}
                variant='primary'
                style={{color: 'white'}}
                 >
                     Node
                </Button>
                </div>
                <br></br>
                <Collapse in={NodeOpen} dimension="width">
        <div id='NodeCard'>
              <Card className='hover-card'
                style={{
                  background:
                    'radial-gradient(circle, rgba(175, 238, 174, 1) 48%, rgba(148, 187, 233, 1) 100%)',
                  width: '150px',
                  textAlign: 'center'
                }}
              >
                <Card.Body>
                  <Card.Text>Node</Card.Text>
                  <Button href='https://youtube.com/playlist?list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&feature=shared
'>Docs</Button>
                </Card.Body>
              </Card>
                  
        </div>
                </Collapse >
            </Col>
        </Row>
        <br></br>
        <Row>
        <Col xs={6} md={6}>
                <div className='d-flex align-items-center '>
                <Button
                onClick={()=> setExpressOpen(!ExpressOpen)}
                aria-controls='ExpressCard'
                aria-expanded={ExpressOpen}
                variant='primary'
                style={{color: 'white'}}
                >
                     Express
                </Button>
                </div>
                <br></br>
                <Collapse in={ExpressOpen} dimension="width">
        <div id='ExpressCard'>
              <Card className='hover-card'
                style={{
                  background:
                    'radial-gradient(circle, rgba(175, 238, 174, 1) 48%, rgba(148, 187, 233, 1) 100%)',
                  width: '150px',
                  textAlign: 'center'
                }}
              >
                <Card.Body>
                  <Card.Text>Express</Card.Text>
                  <Button href='https://youtube.com/playlist?list=PL_cUvD4qzbkwp6pxx27pqgohrsP8v1Wj2&feature=shared
'>Docs</Button>
                </Card.Body>
              </Card>
                  
        </div>
                </Collapse >
            </Col>
            <Col xs={6} md={6}>
                <div className='d-flex align-items-center '>
                <Button
                onClick={()=> setMongoOpen(!MongoOpen)}
                aria-controls='MongoCard'
                aria-expanded={MongoOpen}
                variant='primary'
                style={{color: 'white'}}
                >
                     Mongo
                </Button>
                </div>
                <br></br>
                <Collapse in={MongoOpen} dimension="width">
        <div id='MongoCard'>
              <Card className='hover-card'
                style={{
                  background:
                    'radial-gradient(circle, rgba(175, 238, 174, 1) 48%, rgba(148, 187, 233, 1) 100%)',
                  width: '150px',
                  textAlign: 'center'
                }}
              >
                <Card.Body>
                  <Card.Text>Mongo</Card.Text>
                  <Button href='https://youtu.be/c2M-rlkkT5o?feature=shared
'>Docs</Button>
                </Card.Body>
              </Card>
                  
        </div>
                </Collapse >
            </Col>
        </Row>
      </Container>
      </div>
  );
};

export default Mern;
