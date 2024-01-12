import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
import { Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';
import './App.css' 
// import { emit } from 'nodemon';

const Header = () => {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: ''
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
        // [email] : value,
        // [password]: value
      });
    };
  
    const handleSignin = () => {
      // Check if all fields are filled

      console.log(formData)
      if (!formData.name || !formData.email || !formData.password) {
        toast.error('Please fill in all fields');
      } else {
        // Perform your signin logic here
        // If successful, show success toast
        navigate('/home');
        toast.success('Signin successful!');

      }
    };
    const bg ={
        backgroundImage:'url("https://images.unsplash.com/photo-1473181488821-2d23949a045a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex'

    }
  return (
    <div style={bg}>
    {/* <div className="container">
      <div className="row">
        <div className="col text-center">
          <h2>NoteTaker</h2>
        </div>
      </div>
      <Navbar bg="primary" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Notes</Navbar.Brand>
          <Nav className="a">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div> */}
 <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
 <form onSubmit={(e)=>e.preventDefault()}>
    <div className="row">
        <div className="col text-center">
          <Link to='/'> 
          <Image src='https://w7.pngwing.com/pngs/661/988/png-transparent-blog-brand-note-taking-taking-note-text-logo-sign-thumbnail.png'alt='logo' style={{width:'50px' ,height:'50px'}}></Image>
          </Link>

           <h2 className='heading'>NoteTaker</h2>
        </div>
        </div>
      <div className="form-group">
        <label htmlFor="name" className="text-dark">Name</label>
        <input type="text" className="form-control" id="name" name="name" placeholder="Name" value={formData.name}
            onChange={handleInputChange}/>
      </div>

      <div className="form-group">
        <label htmlFor="email" className="text-dark">Email</label>
        <input type="email" className="form-control" id="email" name="email" placeholder="Email" value={formData.email}
            onChange={handleInputChange}/>
      </div>

      <div className="form-group">
        <label htmlFor="password" className="text-dark">Password</label>
        <input type="password" className="form-control" id="password" name="password" placeholder="Password" value={formData.password}
            onChange={handleInputChange}/>
      </div>
  <button type="submit" className="btn btn-primary" onClick={handleSignin}>Submit</button>
       <span style={{color:'red'}}>Not have an account Signin</span>
       <Link to='/Signin'><button type="submit" className="btn btn-primary" >Signin</button></Link>
 
</form>
       <ToastContainer/>
    </div>
    </div>
  );
};

export default Header;
