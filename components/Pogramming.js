import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Programming = () => {
  const bg = {
    backgroundImage: 'url("https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-97395.jpg?w=996&t=st=1704437270~exp=1704437870~hmac=a794a04c72eb045a29e44ead99862a90e549005af607fa3db2b71979a036d479")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex'
  };
  return (
    <div>
      <NavBar />

      <div style={bg}>
        <Container className='mt-5'>
          <br />
          <h2 style={{ textAlign: 'center', color: 'white' }}>Contents</h2>
          <Row className="justify-content-center">
            <Col md={6} className="mx-auto">
              <Card style={{ background: 'radial-gradient(circle, rgba(175, 238, 174, 1) 48%, rgba(148, 187, 233, 1) 100%)', width: '400px' }}>
                <Card.Body>
                  <div style={{ textAlign: 'center' }}>
                    <Card.Title style={{ color: 'red' }}>DSA</Card.Title>
                    <Card.Text>Content 1</Card.Text>
                    <Link to='/Dsa'><Button variant="primary" >Practice</Button></Link>
                  </div>
                </Card.Body>
              </Card>
              <br />
              <Card style={{ background: 'linear-gradient(to right, #00BFFF, #00BFFF)', width: '400px' }}>
                <Card.Body>
                  <div style={{ textAlign: 'center' }}>
                    <Card.Title style={{ color: 'red' }}>Language</Card.Title>
                    <Card.Text>Content 2</Card.Text>
                    <Link to='/Lan'><Button variant="primary ">Learn</Button></Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mx-auto">
              <Card style={{ background: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)', width: '400px' }}>
                <Card.Body>
                  <div style={{ textAlign: 'center' }}>
                    <Card.Title style={{ color: 'red' }}>Frontend</Card.Title>
                    <Card.Text>Content 3</Card.Text>
                    <Link to='/fend'> <Button variant="primary">Design</Button></Link>
                  </div>
                </Card.Body>
              </Card>
              <br />
              <Card style={{ background: 'linear-gradient(to right, #99FFFF, #99FFFF)', width: '400px' }}>
                <Card.Body>
                  <div style={{ textAlign: 'center' }}>
                    <Card.Title style={{ color: 'red' }}>MERN</Card.Title>
                    <Card.Text>Content 4</Card.Text>
                    <Link to='/Mern'> <Button variant="primary">Develop</Button></Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <Row className="justify-content-center">
            <Col md={6} className="mx-auto">
              <Card className="text-center d-flex" style={{ background: 'linear-gradient(to right, #4FFFB0, #4FFFB0)', width: '400px' }}>
                <Card.Body>
                  <div style={{ textAlign: 'center' }}>
                    <Card.Title style={{ color: 'red' }}>Concepts</Card.Title>
                    <Card.Text>Content 4</Card.Text>
                    <Link to='/concepts'><Button variant="primary">Discover</Button></Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default Programming;
