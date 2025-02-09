import React from "react";
import '../assets/style/event2.css'
import cse from '../assets/img/tech.jpg'
import civil from '../assets/img/nontech.jpg'
import eee from '../assets/img/surprise.jpg'
import { useNavigate } from "react-router-dom";
import QueryCard from "../Components/QueryCard";

function SH() {
        const navigate = useNavigate();
             const events = [
                      { title: "TECHNICAL EVENT", image: cse, link: "/sh/shtech"  },
                      { title: "NON-TECHNICAL EVENT", image: civil,link: "/sh/shnontech" },
                      { title: "SPECIAL EVENT", image: eee,link: "/suprise" },
                     
                    ];
                    const contacts = [
                      { name: "Dr. V. Vijayanarayanan", number: "8148107008" },
                      { name: "Mr. R. Ragland Rajkumar ", number: "7904427680" },
                      { name: "Mr. S. Maris Yukeshwaran ", number: "9843078788" },
                     
                      { name: "Ms. G. Dharshana", number: "6383431307" },
                    ]
    return (
        <>
              <h1 className='ps-5 mt-4 bigText fontOne'><i className='primaryColor'>/ </i>S&H</h1>

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
    export default SH;