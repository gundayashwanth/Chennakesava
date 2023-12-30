import React from 'react'
import './Ck.css'
import Navbar from './Nav'
import img1 from './Images/Ck1.png'
import img3 from './Images/Ck3.png'
import xray from './Images/xray.png'
import ecg from './Images/ECG.png'
import pharmacy from './Images/pharmacy.png'
import img2 from './Images/Ck2.png'
import { FaStar } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Footer from './Footer'
import { FaNotesMedical } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { FaUserDoctor } from "react-icons/fa6";
import { FaStethoscope } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Ck = () => {
  return (
    <div>
        <Navbar/>
        <div className='img1'>
            <img src={img1} width="100%" height="500px"></img>
        </div>
        <div className='head'>
        <div className='h1'>
            <h1>Health Facilities</h1>
            <h3 className='h3'>Medical Department list:</h3>
        </div>
        <div className='p'>
            <p>At Chennakesava,we believe in health care for betterment of human race. <br></br>We are a multi speciality hospital with specialist doctors in all medical departments.</p>
        </div>
        </div>

        <div className='reviews'>
        <div className='review1-container'>
        <div className='venu'>
            <div className='phicon'>
        <FaNotesMedical />
        </div>
            <h4>PHARMACY</h4>
            <p>A Spacious pharmacy store is made available round the clock for OPD & IPD Patient’s/</p>
        </div>
        </div>

        <div className='review2-container'>
            <div className='Mahitha'>
                <div className='labicon'>
                <ImLab />

                </div>
                <h4>LABORATORY</h4>
                <p>Our Motto is customer satisfaction by providing accurate & quality result on time.</p>
                

            </div>

        </div>

        <div className='review2-container'>
            <div className='Ranjith'>
            <div className='doctoricon'>
                <FaUserDoctor />

                </div>
                
                <h4>DOCTORS</h4>
                <p>Our team of medical specialists CKMH ensures best medical care for you & your loved one’s.</p>
        
                

            </div>

        </div>
        {/* {} */}
        <div className='review2-container'>
            <div className='Ranjith'>
                <div className='physioicon'>
                   <FaStethoscope />
                </div>
                <h4>PHYSIOTHERAPHY</h4>
                <p>Physiotherapy Department is equipped with the latest technology to handle physiotherapy needs.</p>
                
            </div>
        </div>
     </div>

        
    
    <div className='img3'>
        <img src={img3} width="50%" height="400px"></img> 
        <div>
        <h2 className='intro'>INTRODUCTION</h2><br></br>
        <p className='para5'>We believe in “Health care for betterment of human race”. We are a Multi speciality hospital with  Specialist Doctors in General Medicine, Pediatrics, Obstetrics & Gynaecology, Orthopedics , General Surgery, ENT, Dermatology, Urology, Neurology, Family medicine, Diabetic care Physiotherapy etc…..</p>
        <div className='para6'>
        <p> 1. Multispeciality consultation by Specialist Doctors</p>
        <p>2. Laboratory with all type of blood investigation</p>
        <p>3. ICU, Operation theatre, ECG, Digital X-RAY</p>
        <p>4. Home visit</p>
        <p>5. Home pickup of blood sample for Laboratory</p>
        </div>
       
        </div>
    </div>
    <br></br>
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
        <div className='img2'>
            <img src={img2} height="300px"width="100%"></img>
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

        <div className='heading'>
            <h1>TESTIMONIAL</h1>
            <h2>Our Happy Patients</h2>
            <p>Our vision is to be recognized as the premier healthcare institution, setting new <br></br>standards in patient outcomes and to serve the community by delivering healthcare <br></br>services at an affordable price.</p>
        </div>
        <div className='reviews'>
        <div className='review1-container'>
        <div className='venu'>
            <h4>Venu</h4>
          <p>Patient</p>
          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          <p>I have admitted here for fever. It was really good, the entire room(Nursing, billing,doctor's maintance) really good.</p>
        </div>
        </div>

        <div className='review2-container'>
            <div className='Mahitha'>
                <h4>Mahitha</h4>
                <p>Patient</p>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar/>
                <p>My mother was admitted here in April. The doctors were responsive and though i am not in Bangalore. They helped me get a clear picture of my mom health from time to time. </p>

            </div>

        </div>

        <div className='review2-container'>
            <div className='Ranjith'>
                <h4>Ranjith</h4>
                <p>Patient</p>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar/>
                <p>The hospital has dedicated doctors and admin staff. We felt homely. The insurance process was smooth. every treatment process was mentioned in detail.</p>

            </div>

        </div>

        <div className='review2-container'>
            <div className='Ranjith'>
                <h4>Manju</h4>
                <p>Patient</p>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar/>
                <p>The hospital has dedicated doctors and admin staff. We felt homely. The insurance process was smooth. every treatment process was mentioned in detail.</p>

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

export default Ck

