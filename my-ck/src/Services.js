import React from 'react'
import './Ck.css'
import Navbar from './Nav'
import img from './Images/Ck7.png'
import xray from './Images/xray.png'
import ecg from './Images/ECG.png'
import pharmacy from './Images/pharmacy.png'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Footer from './Footer'
import {Link} from 'react-router-dom';

function Services() {
  return (
    <div>
        <Navbar/>
        <div className='serviceimg'>
            <img src={img}width="100%" height="400px"></img>
        </div>

        <div className='pc'>
    <div>
        <h2 className='health'>HEALTH FACILITY</h2>
        <h1 className='our'>Our unmatched facility</h1>
        <p className='para6'>CKMH was opened with a vision of providing Quality & affordable health care to the residents of Gollarapalya & surrounding areas of bangalore.</p>
        </div>
        <div className='digitalxray'>
        <div className='xray'>
            <img src={xray} width="400px" height="200px"></img>
        </div>
        <div className='dtxray'>
        <h2 className='digital'>Digital X-ray</h2>
        <p className='para7'>Patients are more comfortable when<br></br> they can undergo x ray without leaving<br></br> their care environment .We come to you , <br></br>bringing all of the equipment we need with us .</p>
        </div>
        </div>
        <div className='ecghead'>
        <div className='ecg'>
            <img src={ecg} width="400px"height="200px"></img>
        </div>
        <div className='ecgh2'>
            <h2>ECG</h2>
            <p>The heart produces tiny electrical impulses,<br></br> which spread through the heart muscle<br></br> to make heart contract . These impulses can be detected <br></br>on the surface from the ECG.</p>
        </div>
        </div>
        <div className='pharmacyph'>
        <div className='phimg'>
            <img src={pharmacy} width="400px" height="200px"></img>
        </div>
        <div className='pharmh2'>
            <h2>Pharmacy</h2>
            <p>A spacious pharmacy store is made available round <br></br> the clock for OPD & IPD Patient’s with Computerised<br></br> inventory & billing system. all latest drugs are available <br></br>in the store for the use of patients.</p>
        </div>
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

export default Services
