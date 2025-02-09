import React from "react";
import '../assets/style/event2.css'
import cse from '../assets/img/tech.jpg'
import civil from '../assets/img/nontech.jpg'
import eee from '../assets/img/surprise.jpg'
import { useNavigate } from "react-router-dom";
import QueryCard from "../Components/QueryCard";

function csepage() {
  const navigate = useNavigate();

    const events = [
      { title: "TECHNICAL EVENTS", image: cse, link: "/cse/csetech"  },
      { title: "NON-TECHNICAL EVENTS", image: civil,link: "/cse/csenontech" },
      { title: "SPECIAL EVENTS", image: eee,link: "/suprise" },
     
    ];

    const contacts = [
      { name: "Mrs. M. Kalarani", number: "9788282597" },
      { name: "Ms. S. Rajeswari", number: "9360382650" },
      { name: "Mrs. S. Janet Vidyaa Nancy", number: "8344891799" },
      { name: "Mr R .Keerthi Haran", number: "9345996914" },
      { name: "Ms. R. Akshal", number: "7418990030" },
      { name: "Mr. C. Vishnu Balaji", number: "8072044568" },
      { name: "Ms. P. Sruthi", number: "7604872819" },
    ];
  return (
    <>
      
      <h1 className='ps-5 mt-4 bigText fontOne'><i className='primaryColor'>/ </i>CSE , IT & AIDS</h1>

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
export default csepage;