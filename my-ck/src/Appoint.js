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

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3001/api/appointmentForm', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
})
  .then((response) => {
    console.log(response); // Log the response to see its content
    return response.json();
  })
  .then((data) => {
    console.log('Form submitted:', data);
    // You can perform additional actions after successful form submission
  })
  .catch((error) => {
    console.error('Error submitting form:', error);
  });

  };

  return (
    <div>
      <Navbar />
      <div className="appointment-form-container">
        
        <form onSubmit={handleSubmit} className='contact-form'>
        <h2 className='form'>Book Appointment</h2>
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

          <label htmlFor="phone">Phone Number:</label>
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
          ></textarea>

          <button type="submit">Submit</button>
        </form>
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
  );
};

export default AppointmentForm;
