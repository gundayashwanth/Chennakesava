import React from 'react'
import './Ck.css'
import logo from './Images/logo.png'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="footer-content">
        <p>Copyright @2023 Chennakesava multispeciality hospital PVT.LTD, All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
