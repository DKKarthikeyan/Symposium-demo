import React from "react";
import '../assets/style/event2.css'
import cse from '../assets/img/tech.jpg'
import civil from '../assets/img/nontech.jpg'
import eee from '../assets/img/surprise.jpg'
import ece from '../assets/img/ECE.jpg'
import mech from '../assets/img/MECH.jpg'
import sh from '../assets/img/sah.jpg'
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import QueryCard from "../Components/QueryCard";
function EEE() {
    const navigate = useNavigate();
     const events = [
              { title: "TECHNICAL EVENTS", image: cse, link: "/eee/eeetech"  },
              { title: "NON-TECHNICAL EVENTS", image: civil,link: "/eee/eeenontech" },
              { title: "SPECIAL EVENTS", image: eee,link: "/suprise" },
             
            ];
            const contacts = [
              { name: " Dr. K. Rajesh ", number: " 9942305401" },
              { name: "Mr. J. Jeffry  ", number: "9442583263" },
             
              { name: "Mr. P. Keerthiga ", number: "9080474770" },
             
              // { name: "Ms. G. Dharshana", number: "6383431307" },
            ]
    return (
        <>
        <h1 className='ps-5 mt-4 bigText fontOne'><i className='primaryColor'>/ </i>EEE</h1>

<div className="container">
  <div className="grid-container">
    {events.map((event, index) => (
      <div
        key={index}
        className="card card1 eventCard"
        onClick={() => navigate(event.link)} 
        style={{ cursor: "pointer" }} // Make it look clickable
      >
        <div className="card-header"><h2 className="title t1"><i className="primaryColor">#</i>{event.title}</h2></div>
        <div className="card-body"><img src={event.image} alt={event.title} className="image" /></div>
        
        
      </div>
    ))}
  </div>
</div>
<QueryCard contacts={contacts} />

        </>
    );
    }   
    export default EEE;