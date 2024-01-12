import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import NavBar from './NavBar'
import Footer from './Footer'
import { toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios'
const Signin = () => {

   const navigate = useNavigate();

   const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    ConPassword: ''
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
    if (!formData.name || !formData.email || !formData.password || !formData.ConPassword) {
      toast.error('Please fill in all fields');
    } else {
      // Perform your signin logic here
      // If successful, show success toast
      navigate('/home');
      toast.success('Signin successful!');

    }
  };


  // const[name,setName]=useState("");
  // const[email , setEmail]=useState("");
  // const[password,setPassword]=useState("");
  // const[ConPassword ,setConPassword] = useState("");
  
  // const handleSubmit=async()=>{

  //   try {
  //     const data={
  //       name:name,
  //       email:email,
  //       password:password,
  //       ConPassword:ConPassword
  //     }

  //   const send=await axios.post("https://localhost:3000/Signin",{data:data})
  //   console.log(send);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
    const bg={
        backgroundImage:'url("https://images.unsplash.com/photo-1492892132812-a00a8b245c45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex'
    }
  return (

    <div style={bg}>
     <NavBar/>
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
        <label htmlFor="name" className="text-light">Name</label>
        <input type="text" className="form-control" id="name" name="name" placeholder="Name"  onChange={handleInputChange} />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="text-light">Email</label>
        <input type="email" className="form-control" id="email" name="email" placeholder="Email"  onChange={handleInputChange}/>
      </div>

      <div className="form-group">
        <label htmlFor="password" className="text-light">Password</label>
        <input type="password" className="form-control" id="password" name="password" placeholder="Password"  onChange={handleInputChange}/>
      </div>

      <div className="form-group">
        <label htmlFor="password" className="text-light">ConformPassword</label>
        <input type="password" className="form-control" id="password" name="password" placeholder="ConPassword"  onChange={handleInputChange}/>
      </div>


      <button type="submit" className="btn btn-primary" onClick={handleSignin}>Submit</button>
      </form>
      <ToastContainer/>
    </div>
    <div style={{ position: 'fixed', bottom: 0, width: '100%' ,height:'10%' }}>
    <Footer/>
    </div>
    </div>
  )
}

export default Signin
