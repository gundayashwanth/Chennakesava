import React from 'react'
import './Ck.css'
import Ck from './Ck'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import About from './About';
import Services from './Services';
import Doctors from './Doctors';
import Gallery from './Galllery';
import Career from './Career';
import Contactus from './Contact';
import AppointmentForm from './Appoint';
import JobApplicationForm from './Job';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Ck/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Services" element={<Services/>}/>
          <Route path="/Doctors"element={<Doctors/>}/>
          <Route path="/Gallery"element={<Gallery/>}/>
          <Route path="/Career"element={<Career/>}/>
          <Route path="/Contactus"element={<Contactus/>}/>
          <Route path="/apointment"element={<AppointmentForm/>}/>
          <Route path="/jobApplictionForm"element={<JobApplicationForm/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App
