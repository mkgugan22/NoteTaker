import React from "react";
import './App.css';
import Home from "./Home";
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Programming from "./Pogramming";
import Dsa from './DSA';
import Frontend from './Frontend'
import Language from "./Language";
import Mern from './Mern'
import Concepts from "./Concepts";
import Query from "./Query";
// import NavBar from "./NavBar";
import Signin from "./Signin";
import { ToastContainer } from "react-bootstrap";
function App() {
  return (
    <BrowserRouter>
    <ToastContainer></ToastContainer>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/home' element={<Programming/>}></Route>
    <Route path='/Dsa' element={<Dsa/>}></Route>
    <Route path= '/Fend' element= {<Frontend/>}></Route>
    <Route path= '/Lan' element={<Language/>}></Route>
    <Route path='/Mern' element={<Mern/>}></Route>
    <Route path= '/concepts' element={<Concepts/>}></Route>
    <Route path ='/query' element={<Query/>}></Route>
    <Route path='/Signin' element ={<Signin/>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
