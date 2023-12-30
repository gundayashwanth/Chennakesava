import React from 'react';
import './Ck.css';
import logo from './Images/logo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} height="150px" width="150px"></img>
      </div>
      <div className="nav-links">
         <Link to="/">Home</Link>
        <Link to="/About">About Us</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Doctors">Doctors</Link>
        <Link to="/Gallery">Gallery</Link>
       <Link to="/Career">Career</Link>
        <Link to="/Contactus">Contact us</Link>
      </div>
        <Link to="/apointment" ><button className="appointment-btn">Get Appointment</button></Link>
    </div>
  );
};

export default Navbar;
