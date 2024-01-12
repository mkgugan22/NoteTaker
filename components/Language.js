import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Card, Button, Container , Row,Col,Image} from 'react-bootstrap';
import './Language.css'
const Language = () => {
  const bg = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    // width: '110%'
  };
  return (
    <div>
      <NavBar/>
      <div style={bg}>
      <Container  className='mt-5'>
   <br></br>
   <h2 style={{ textAlign: 'center', color: 'red' }}>Language</h2>
      <Image
        src="https://media.tenor.com/k_FD58xnsicAAAAi/work-internet.gif"
        alt="Centered Image"
        className="centered-image"
        fluid
        style={{ width: '100px', height: '120px',marginLeft:"330px",marginTop:"200px" }}
      />
   <Row className="justify-content-center mb-3">
           <div>
            <Col md={6} className="mx-auto">
      <Card  className="hover-card" style={{ background: 'radial-gradient(circle, rgba(175, 238, 174, 1) 48%, rgba(148, 187, 233, 1) 100%)', width: '150px' ,textAlign:'center' }}>
        <Card.Header as='h5' style={{textAlign:'center' ,color:'red'}}>
      C
        </Card.Header>
        <Card.Title>
          C Programming
        </Card.Title>
        <Card.Text>
          to more know
        </Card.Text>
        <Button className='mx-auto' variant="primary" style={{width:'100px'}}>C</Button>
      </Card>
      </Col>
      </div>

      <br></br>
      <br></br>
      <div className="relative-container">
      </div>
      <Col md={6} className="mx-auto">
      <Card className="hover-card" style={{ background: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)', width: '150px' ,textAlign:'center'  }}>
        <Card.Header as='h5'>
      Java
        </Card.Header>
        <Card.Title>
          Java Programming
        </Card.Title>
        <Card.Text>
          to more know
        </Card.Text>
        <Button className='mx-auto' variant="primary" style={{width:'100px'}}>Java</Button>
      </Card>
      </Col>
      <br></br>
      <Col md={6} className="mx-auto">
      <Card  className="hover-card" style={{ background: 'linear-gradient(to right, #99FFFF, #99FFFF)', width: '150px' ,textAlign:'center'  }}>
        <Card.Header as='h5' style={{textAlign:'center' ,color:'red'}}>
      Sql
        </Card.Header>
        <Card.Title>
         Sql 
        </Card.Title>
        <Card.Text>
          to more know
        </Card.Text>
        <Button className='mx-auto' variant="primary" style={{width:'100px'}}>Sql</Button>
      </Card>
      </Col>

      <br></br>
      <Row className="justify-content-center mb-3">
      <Col md={6} className="mx-auto">
      <Card className="hover-card" style={{ background: 'linear-gradient(to right, #4FFFB0, #4FFFB0)', width: '150px',textAlign:'center' }}>
        <Card.Header as='h5' style={{textAlign:'center' ,color:'red'}}>
      Mysql
        </Card.Header>
        <Card.Title>
          Mysql
        </Card.Title>
        <Card.Text>
          to more know
        </Card.Text>
        <Button className='mx-auto' size='sm' variant="primary" style={{width:'100px'}}> Mysql</Button>
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

export default Language
