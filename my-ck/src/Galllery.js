import React from 'react'
import './Ck.css'
import Navbar from './Nav'
import gal1 from './Images/gal1.png'
import gal2 from './Images/gal2.png'
import gal3 from './Images/gal3.png'
import gal4 from './Images/gal4.png'
import gal5 from './Images/gal5.png'
import gal6 from './Images/gal6.png'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Footer from './Footer'
import {Link} from 'react-router-dom';
function Galllery() {
  return (
    <div>
        <Navbar/>
        <div className='gallery1'>
        <div className='gal1'>
            <img src={gal1} width="300px"height="auto"></img>
        </div>
        <div className='gal2'>
            <img src={gal2} width="300px"height="auto"></img>
        </div>
        <div className='gal3'>
            <img src={gal3} width="300px" height="auto"></img>
        </div>
        <div className='gal4'>
            <img src={gal4} width="300px" height="auto"></img>
        </div>
        </div>
        <div className='gallery2'>
        <div className='gal5'>
            <img src={gal5} width="380px" height="auto"></img>
        </div>
        <div className='gal6'>
            <img src={gal6} width="380px" height="auto"></img>
        </div>
        </div>

        <div className='pk'>
        <div className='bottom'>
        <div className='pkh2'>
            <h1>About</h1>
            <p>CHENNA KESHAVA MULTISPECIALITY HOSPITAL.PVT.LTD <br></br>was opened with a vision of providing quality<br></br> & affordable health care to the residents of Gollarapalya<br></br> & surrounding areas of bangalore. At Chenna Keshava, <br></br>we believe in “Health care for betterment of human race”….</p>
           <div className='icons'>
            <FaInstagram /><FaFacebook /><FaYoutube />
           </div>
        </div>

        <div className='support'>
            <h1>Support</h1>
            <div className="sup-links">
            <Link to="/" >Home</Link><br></br>
            <Link to="/About">About Us</Link><br></br>
            <Link to="/Services">Services</Link><br></br>
            <Link to="/Doctors">Doctors</Link><br></br>
            <Link to="/Gallery">Gallery</Link><br></br>
            <Link to="/Career">Career</Link><br></br>
            <Link to="/Contactus">Contact us</Link><br></br>
      </div>
        </div>

        <div className='location'>
            <h1>Location</h1>
            <FaLocationDot /><p>N0 9/4/9/5, Hosahalli,<br></br>Gollarpalya, Magadi mainroad,<br></br> Herohalli, Bengaluru, <br></br>North Karnataka,- 560091</p>
            <MdEmail /><p>ckmultispeciality hospital@gmail.com</p>
            <IoCall /><p>080-22076871 / 6361242258</p>

        </div>
        </div>

     </div>
     <Footer/>
    </div>
  )
}

export default Galllery
