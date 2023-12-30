import React, { useState } from 'react';
import './Ck.css';
import Navbar from './Nav';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Footer from './Footer';
import { Link } from 'react-router-dom';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        // You can add additional logic here, such as resetting the form or navigating to a thank-you page
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="contact-us-container">

       
        <form onSubmit={handleSubmit}>
        <h1 className='contact'>Contact Us</h1>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
       
      </div>
      <br></br>
      <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7602982260078!2d77.47067667381054!3d12.987177414539133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3b73359fbbd5%3A0x63819ecce21fad4a!2sCHENNA%20KESHAVA%20MULTI-SPECIALITY%20HOSPITAL%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1703075451778!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
  );
};

export default ContactUs;
