import React from "react";
import '../assets/style/event2.css'
import cse from '../assets/img/tech.jpg'
import civil from '../assets/img/nontech.jpg'
import eee from '../assets/img/surprise.jpg'
import { useNavigate } from "react-router-dom";
import QueryCard from "../Components/QueryCard";

function Civil() {
     const navigate = useNavigate();
    
        const events = [
          { title: "TECHNICAL EVENTS", image: cse, link: "/civil/civiltech"  },
          { title: "NON-TECHNICAL EVENTS", image: civil,link: "/civil/civilnontech" },
          { title: "SPECIAL EVENTS", image: eee,link: "/suprise" },
         
        ];
        const contacts = [
          { name: "Mr. P. Manikandan", number: "9787646484" },
          { name: "Ms. M. Subanu", number: "8015558869" },
          { name: "Mr. T. Karthikeyan", number: "7010213168" },
         
          // { name: "Ms. P. Sruthi", number: "7604872819" },
        ];
    return (
        <>
        <h1 className='ps-5 mt-4 bigText'><i className='primaryColor'>/ </i>CIVIL</h1>
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

    export default Civil;