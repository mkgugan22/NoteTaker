import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
const Query = () => {
   const bg= {
    display: 'flex',
    backgroundImage: 'url("https://img.freepik.com/free-vector/realistic-neon-lights-background_23-2148907367.jpg?w=996&t=st=1704783667~exp=1704784267~hmac=83f1a69304fe4249f86a7ae922ff78845f4e71ea25e7283a16056a9f0833f105")',
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
   }
    return (


    <div style={bg}>
      <NavBar/>
          <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
    <div className="row">
        <div className="col text-center">
          <h2 className='heading' style={{color:'white'}}>ReachUS</h2>
        </div>
        </div>
      <div className="form-group">
        <label htmlFor="name"  style={{color:'red'}}>Name</label>
        <input type="text" className="form-control" id="name" name="name" placeholder="Name" required/>
      </div>
      <div className="form-group">
        <label htmlFor="password" style={{color:'red'}}>Password</label>
        <input type="password" className="form-control" id="password" name="password" placeholder="Password" required/>
      </div>
      <div className="form-group">
  <label htmlFor="textarea" style={{ color: 'red' }}>Textarea</label>
  <textarea className="form-control" id="textarea" name="textarea" placeholder="Your text here..." rows="4" cols="20" ></textarea>
</div>

      <Link to='/home'><button type="submit" className="btn btn-primary">Submit</button></Link>
    </div>

    <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
    <Footer/>
    </div>

    </div>
  )
}

export default Query
