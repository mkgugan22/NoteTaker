import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
const NavBar = () => {
  return (
    <div>
          <div className="container">
      <div className="row">
        
      </div>
      <Navbar bg="primary" variant="dark" fixed="top">
        <Container>
         <Link to='/'> 
         <Link to='/'>         <Image src='https://w7.pngwing.com/pngs/661/988/png-transparent-blog-brand-note-taking-taking-note-text-logo-sign-thumbnail.png'alt='logo' style={{width:'50px' ,height:'50px'}}></Image>
          </Link><Navbar.Brand href="#home">Notes</Navbar.Brand></Link>
          <Nav className=" justify-content-end">
          <Link to='/home'> <Nav.Link href="#home">Home</Nav.Link> </Link>
           <Link to='/query'> <Nav.Link href="#features">ReachUs</Nav.Link></Link>
         
          </Nav>
        </Container>
      </Navbar>
    </div>
    </div>
  )
}

export default NavBar
