import React from "react";
import '../assets/style/event3.css';
import styled from 'styled-components';
import strickabridege from '../assets/img/CIVIL/strickabridge.jpg'
import breakthecode from '../assets/img/CIVIL/breakthecode.jpg'
import ppt from '../assets/img/CIVIL/ppt.jpg' 
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import QueryCard from "../Components/QueryCard";

function CseTech1() {
  const navigate = useNavigate();
  const contacts = [
    { name: "Mr. P. Manikandan", number: "9787646484" },
    { name: "Ms. M. Subanu", number: "8015558869" },
    { name: "Mr. T. Karthikeyan", number: "7010213168" },
   
    // { name: "Ms. P. Sruthi", number: "7604872819" },
  ];

  return (
   <>
   <h1 className='ps-5 mt-4 bigText'><i className='primaryColor'>/ </i>Events</h1>
       <div className="event-container"> {/* Use class names from external CSS */}
         <div className="image-side">
         <div class="ribbon ribbon-top-right"><span>&nbsp;&nbsp;&nbsp; Exciting Rewards</span></div>
           <img className="event-image" src={strickabridege} alt="Starlight Coding Event" />
         </div>
         <div className="text-side">
           <h2 className="title">&lt; Strick A Bridge /&gt;</h2>
           <p className="description pb-3">
           Teams will construct a bridge using only provided materials (e.g., sticks, glue, tape) within 2 hours. Pre-prepared components are not allowed. The bridge must span at least 40 cm, be 10 cm wide, and meet any height constraints. A preliminary round will be conducted. Strength will be tested by incremental loading until failure or a set limit.
           </p>
           <a className="btn btn-outline-warning border-3 read-more"  onClick={() => navigate('/civil/Strick_a_Bridge')} >Read More &lt;-&gt;</a>
         </div>
       </div>
   
   
       <div className="event-container"> {/* Use class names from external CSS */}
         <div className="image-side">
         <div class="ribbon ribbon-top-right"><span>&nbsp;&nbsp;&nbsp; Exciting Rewards</span></div>
           <img className="event-image" src={breakthecode} alt="Starlight Coding Event" />
         </div>
         <div className="text-side">
           <h2 className="title">&lt; Break The Code /&gt;</h2>
           <p className="description pb-3">
           A "Break the code" generally refers to a situation where construction does not fully comply with established building codes, either due to design oversights, execution errors, or intentional violations. This can lead to structural weaknesses, safety hazards, or legal issues.
           </p>
           <a className="btn btn-outline-warning border-3 read-more" onClick={() => navigate('/civil/break_the_code')} >Read More &lt;-&gt;</a>
         </div>
       </div>
       
   
       <QueryCard contacts={contacts} /> 
       
   </>
  );
}export default CseTech1;