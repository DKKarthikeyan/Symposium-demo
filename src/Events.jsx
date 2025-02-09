import React from 'react'
import { useNavigate } from "react-router-dom";
import './assets/style/event.css'
import cse from './assets/img/CSE.jpg'
import civil from './assets/img/CIVIL.jpg'
import eee from './assets/img/EEE.jpg'
import ece from './assets/img/ECE.jpg'
import mech from './assets/img/Mech.jpg'
import sh from './assets/img/sah.jpg'
import ContactCard from './Components/ContactCard';

function Events() {

  const contacts = [
    { name: "Navaneeth", phone: "+91 9042142160" },
    { name: "Raghul", phone: "+91 9884062320" },
    { name: "Harshini", phone: "+91 9840448087" },
    { name: "Subendiran", phone: "+91 8903055142" },
  ];


  const events = [
    { title: "CSE, IT & AI&DS", image: cse, link: "/cse" },
    { title: "CIVIL", image: civil, link: "/civil" },
    { title: "EEE", image: eee, link: "/eee" },
    { title: "ECE", image: ece, link: "/ece" },
    { title: "MECH", image: mech, link: "/mech" },
    { title: "SCIENCE & HUMANITIES", image: sh, link: "/sh" },
  ];
  
  const navigate = useNavigate(); // Initialize navigate
  return (
    
    <>
    <h1 className='ps-5 mt-4 fontOne bigText'><i className='primaryColor'>/ </i>Departments</h1>
   <div className="container px-0">
      <div className="grid-container">
        {events.map((event, index) => (
          <div
            key={index}
            className="card card2 eventCard"
            onClick={() => navigate(event.link)} // Navigate to respective page
            style={{ cursor: "pointer" }} // Make it look clickable
          >
            <div className="card-header eventCardHeader">
              <h2 className="title" style={{color:'white'}}><i className='primaryColor'></i><i></i>{event.title}</h2>
            </div>
            <div className="card-body eventCardBody">
            <img src={event.image} alt={event.title} className="image" />
            </div>
            
          </div>
        ))}
      </div>
    </div>
    {/* contact div */}
    <div className="eventQuery d-flex mx-5 flex-column border border-5 border-primary rounded my-4 p-4">
        <h4><i className='primaryColor'>#</i>Contact</h4>
        <p className='greyColor mb-0'>For queries regarding events</p>
        <div className='d-flex flex-wrap gap-1 justify-content-around align-items-center'>
        <ContactCard name="Mr.S.Nagamani" number="6383994849"/>
        <ContactCard name="Mr.P.Manivel Pandian" number="8778507858"/>
        <ContactCard name="Mr.R.Hariharan" number="6374150680"/>
        <ContactCard name="Ms.S.Sangeetha" number="8807188060"/>

        </div>
        
      </div>

    

   
    </>
  )
}

export default Events