import React from "react";
import '../assets/style/event2.css'
import cse from '../assets/img/tech.jpg'
import civil from '../assets/img/nontech.jpg'
import eee from '../assets/img/surprise.jpg'
import { useNavigate } from "react-router-dom";
import QueryCard from "../Components/QueryCard";

function ECE() {
    const navigate = useNavigate();
    const contacts = [
      { name: " Mr.P.Abdul Samad, ", number: "96989 69897" },
      { name: "Mr.A.G.Paranthaman", number: "90033 59679" },
      { name: "Mr.R.Hariharan ", number: "63741 50680" },
     
      { name: "Ms.P.Swathi ", number: "93443 47054" },
    ]
    
        const events = [
          { title: "TECHNICAL EVENTS", image: cse, link: "/ece/ecetech"  },
          { title: "NON-TECHNICAL EVENTS", image: civil,link: "/ece/ecenontech" },
          { title: "SPECIAL EVENTS", image: eee,link: "/suprise" },
         
        ];

    return (
      <>
      <h1 className='ps-5 mt-4 bigText fontOne'><i className='primaryColor'>/ </i>ECE</h1>

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
    export default ECE;