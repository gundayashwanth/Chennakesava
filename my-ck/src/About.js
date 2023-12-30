import React from 'react'
import './Ck.css'
import Navbar from './Nav'
import img from './Images/Ck5.png'
import { GoGoal } from "react-icons/go";
import { GiSupersonicArrow } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Footer from './Footer';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
        <Navbar/>
        <div className='aboutimg'>
            <img src={img} width="100%" height="400px"></img>
        </div>
        <div className='aboutus'>
            <div className='abouth2'>
            <h2>INTRODUCTION</h2>
            <h5>How We Became Best Among Others ?</h5>
            <p>CHENNA KESHAVA MULTISPECIALITY HOSPITAL.PVT.LTD was opened <br></br>with a vision of providing quality & affordable health care to the<br></br> residents of Gollarapalya & surrounding areas of bangalore. <br></br>At Chenna Keshava, we believe in "Health care for betterment of human race"….</p>
             </div>

             <div className='aboutpara'> 
                <p>1. Multispeciality consultation by specialist Doctors</p>
                <p>2. Laboratory with all type of blood investigation</p>
                <p>3. ICU, Operation theatre, ECG, Digital X-RAY</p>
                <p>4. Home pickup of blood sample for Laboratory</p>
             </div>
        </div>
        
        <div className='abt2'>
        <div className='mission-container'>
        <div className='ourmission'>
            <div className='goalicon'>
            <GoGoal />
            </div>

            <h2>OUR MISSION</h2>
            <p>At Chenna Keshava multi-specialty hospital our mission is to provide exceptional and compassionate healthcare to our community, ensuring the well-being and vitality of every patient we serve. We are dedicated to delivering the highest quality medical services, driven by a commitment to innovation, clinical excellence and patient centered care.</p>
        </div>

        </div>

        <div className='mission-container'>
            <div className='policy'>
                <div className='qualityicon'>
                <GiSupersonicArrow />
                </div>
                <h2>Quality Policy</h2>
                <p>We are committed to provide excellent quality health services at Chenna Keshava Multi Specialty hospital, at affordable price to the patients for patient safety and well being. We aim to heal the seen and unseen wounds and also for the physical and mental health of our community. We commit to dispense quality service at every stage through the Quality management system while complying with all regulatory requirements.</p>

            </div>
        </div>
        
        </div>
       

        <div className='calling'>
            <div className='action'>
                <h1>CALL TO ACTION</h1>
                <p>At Chenna Keshava , we believe in “Health care for betterment of human race”. We are a Multi speciality hospital with  Specialist Doctors in General Medicine, Pediatrics, Obstetrics & Gynaecology, Orthopedics, General Surgery, Ent, Dermatology, Urology, Neurology, Family medicine, Diabetic care Physiotherapy etc…..</p>
                <Link to="/apointment" ><button className="appointment-btn">Get Appointment</button></Link>

                <h1>Or CALL:</h1>
                <p className='emergency1'>1(234)567890 / 1(567)234-9330</p>
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

export default About
