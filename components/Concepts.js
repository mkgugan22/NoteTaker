import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Card, Button, Container , Row,Col,Image} from 'react-bootstrap';
import './Concepts.css'
const Concepts = () => {
  const bg = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1559163499-413811fb2344?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex'
  };
  return (
    <div>
      <NavBar/>
      <div style={bg}>
      <Container  className='mt-5'>
   <br></br>
   <h2 style={{ textAlign: 'center', color: 'red' }}>Concepts</h2>
      <Image
        src="https://media.tenor.com/JRdqWtEpnLgAAAAj/cute-dragon-work.gif"
        alt="Centered Image"
        className="centered-image"
        fluid
        style={{ width: '100px', height: '120px',marginLeft:"440px",marginTop:"200px" }}
      />
   <Row className="justify-content-center mb-3">
           <div>
            <Col md={6} className="mx-auto">
      <Card  className="hover-card" style={{ background: 'radial-gradient(circle, rgba(175, 238, 174, 1) 48%, rgba(148, 187, 233, 1) 100%)', width: '400px' ,textAlign:'center' }}>
        <Card.Header as='h5' style={{textAlign:'center' ,color:'red'}}>
      OS
        </Card.Header>
        <Card.Title>
          OperatingSystem
        </Card.Title>
        <Card.Text>
          to more know
        </Card.Text>
        <Button className='mx-auto' variant="primary" style={{width:'200px'}} href=' https://youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&feature=shared'>OS</Button>
      </Card>
      </Col>
      </div>

      <br></br>
      <br></br>
      <div className="relative-container">
      </div>
      <Col md={6} className="mx-auto">
      <Card className="hover-card" style={{ background: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)', width: '400px' ,textAlign:'center'  }}>
        <Card.Header as='h5'>
      Git
        </Card.Header>
        <Card.Title>
          Git
        </Card.Title>
        <Card.Text>
          to more know
        </Card.Text>
        <Button className='mx-auto' variant="primary" style={{width:'200px'}} href=' https://youtu.be/VIBWdLLq9kQ?feature=shared'>Git</Button>
      </Card>
      </Col>
      <br></br>
      <Col md={6} className="mx-auto">
      <Card  className="hover-card" style={{ background: 'linear-gradient(to right, #99FFFF, #99FFFF)', width: '400px' ,textAlign:'center'  }}>
        <Card.Header as='h5' style={{textAlign:'center' ,color:'red'}}>
      Computer Architecture
        </Card.Header>
        <Card.Title>
         CA
        </Card.Title>
        <Card.Text>
          to more know
        </Card.Text>
        <Button className='mx-auto' variant="primary" style={{width:'200px'}} href='https://youtube.com/playlist?list=PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q&feature=shared'>CA</Button>
      </Card>
      </Col>

      <br></br>
      <Row className="justify-content-center mb-3">
      <Col md={6} className="mx-auto">
      <Card className="hover-card" style={{ background: 'linear-gradient(to right, #4FFFB0, #4FFFB0)', width: '400px',textAlign:'center' }}>
        <Card.Header as='h5' style={{textAlign:'center' ,color:'red'}}>
      Data Analytics
        </Card.Header>
        <Card.Title>
          DA
        </Card.Title>
        <Card.Text>
          to more know
        </Card.Text>
        <Button className='mx-auto' variant="primary" style={{width:'200px'}} href='https://youtu.be/ZUdlc5LsmHA?feature=shared'> DA</Button>
      </Card>
      </Col>
      </Row>
      </Row>
      </Container>
      </div>
      <Footer/>
    </div>
  )
}

export default Concepts
