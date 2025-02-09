import React from "react";
import '../assets/style/final.css'
import { useState } from "react";
import img4 from '../assets/img/event1.jpg'

import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaClipboardList } from "react-icons/fa";
import Footer from "../Footer";
import QueryCard from "../Components/QueryCard";

function Event1(){
     const [activeTab, setActiveTab] = useState("description");
     const contacts = [
        // { name: " DR. P. S. SATHEESH KUMAR", number: "9566700896" },
        { name: "Mrs. Lilly Roseline Mary ", number: "8508000830" },
        { name: "Mrs. M. Santhanalakshmi", number: "+9080457745" },
        { name: "Ms Sumitha ", number: "9345740450" },
        { name: "MR M.Karthikeyan ", number: "7339622938" },
      ]
    return(
        <>
                < div className="header">
                <span className="primaryColor">/</span><span>Hack Horizons</span>
                 </div>
                 <div className="container-md">
                 <div className="row mb-5">
                                                                                                                 <div className="col-md-5">
                                                                                                                   <div  className="box">
                                                                                                                   <img src={img4} alt="Starlight Coding" />
                                                                                                                   </div>
                                                                                                       
                                                                                                                 </div>
                                                                                                                 <div className="col-md-7">
                                                                                                                 <div className="tech-container">
                                                                                                                   <span className="hashtag">#tech</span>
                                                                                                                   <div className="underline"></div>
                                                                                                               </div>
                                                                                                                 <div className="text-container">
                                                                                                                           <div className="buttons">
                                                                                                                               <button
                                                                                                                                   className={`tab-btn ${activeTab === "description" ? "active" : ""}`}
                                                                                                                                   onClick={() => setActiveTab("description")}
                                                                                                                               >
                                                                                                                                   Description ↔
                                                                                                                               </button>
                                                                                                                               <button
                                                                                                                                   className={`tab-btn ${activeTab === "Rounds" ? "active" : ""}`}
                                                                                                                                   onClick={() => setActiveTab("Rounds")}
                                                                                                                               >
                                                                                                                                 Rounds ↔
                                                                                                                               </button>
                                                                                                                               
                                                                                                                           </div>
                                                                                                       
                                                                                                                           {/* Tab Content */}
                                                                                                                           {activeTab === "description" && (
                                                                                                                               <div className="tab-content">
                                                                                                                                   <p>
                                                                                                                                   Projects must be coded during the hackathon, with open-source tools allowed if declared. Pre-built solutions and plagiarism are prohibited. Submissions must include the code repository, documentation, and screenshots.

Evaluation Criteria: Based on individual and team performance, creativity, problem-solving, innovation, user impact, and engagement.                                                                                                                                   </p>
                                                                                                                                   <p className="highlight">Team members: <span>Teams must consist of 1 to 2 members.</span></p>
                                                                                                                                   {/* <p className="highlight">Winners: <span>Top 3 + Best Women's team + Best First Year's team</span></p> */}
                                                                                                                               </div>
                                                                                                                           )}
                                                                                                       
                                                                                                                           {activeTab === "Rounds" && (
                                                                                                                               <div className="tab-content">
                                                                                                                                   <p>
                                                                                                                                   Open to students, professionals, and enthusiasts, with teams of 1-2 members from any institution. Each team must register with a unique name, and participants can only be in one team.                                                                                                                                   </p>
                                                                                                                                   {/* <div className="row">
                                                                                                                                     <div className="col-md-6">
                                                                                                                                       <h2>ROUND 1</h2>
                                                                                                                                       
                                                                                                       
                                                                                                       
                                                                                                                                     </div>
                                                                                                                                     <div className="col-md-6">
                                                                                                                                       <h2>ROUND 2</h2>
                                                                                                                                     </div>
                                                                                                                                   </div> */}
                                                                                                                                   <div >
                                                                                                                   <div className="row">
                                                                                                                       {/* Round 1 */}
                                                                                                                       <div className="col-md-6">
                                                                                                                           <h3 className="round-title">Round 1</h3>
                                                                                                                           <div className="round-card">
                                                                                                                               <h5><FaClipboardList style={{fontSize:'16px'}} /> Show the Skill</h5>
                                                                                                                               <p className="subtitle">What to expect?</p>
                                                                                                                           </div>
                                                                                                                           <div className="round-card">
                                                                                                                               <h5><FaMapMarkerAlt /> NPRCET Main Block</h5>
                                                                                                                               <p className="subtitle">Location</p>
                                                                                                                           </div>
                                                                                                                           <div className="round-card">
                                                                                                                               <h5><FaCalendarAlt /> 21 February 2025</h5>
                                                                                                                               <p className="subtitle">Date</p>
                                                                                                                           </div>
                                                                                                                           {/* <div className="round-card">
                                                                                                                               <h5><FaClock /> 9:00 AM to 1:30 PM</h5>
                                                                                                                               <p className="subtitle">Duration</p>
                                                                                                                           </div> */}
                                                                                                                       </div>
                                                                                                       
                                                                                                                       {/* Round 2 */}
                                                                                                                       {/* <div className="col-md-6">
                                                                                                                           <h3 className="round-title">Round 2</h3>
                                                                                                                           <div className="round-card">
                                                                                                                               <h5><FaClipboardList /> Coding Challenges</h5>
                                                                                                                               <p className="subtitle">What to expect?</p>
                                                                                                                           </div>
                                                                                                                           <div className="round-card">
                                                                                                                               <h5><FaMapMarkerAlt /> Ground Floor Lab, DCSE</h5>
                                                                                                                               <p className="subtitle">Location</p>
                                                                                                                           </div>
                                                                                                                           <div className="round-card">
                                                                                                                               <h5><FaCalendarAlt /> 22 to 23 March 2024</h5>
                                                                                                                               <p className="subtitle">Date</p>
                                                                                                                           </div>
                                                                                                                           <div className="round-card">
                                                                                                                               <h5><FaClock /> 9:00 PM to 6:00 AM</h5>
                                                                                                                               <p className="subtitle">Duration</p>
                                                                                                                           </div>
                                                                                                                       </div> */}
                                                                                                                   </div>
                                                                                                               </div>
                                                                                                                               </div>
                                                                                                                           )}
                                                                                                       
                                                                                                                           
                                                                                                       
                                                                                                       <button className="closed-btn" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScw5hddu82bCWz8QV-Jtm0GrBmw1_NhurNzU-jMsVJ4uM7_RA/viewform", "_blank")}>Register Now ↔</button>
                                                                                                       <button className="closed-btn" style={{margin:'0px 50px'}}><a href="pdf/event.pdf" download="event.pdf" style={{textDecoration:'none',textDecorationColor:'none'}}>Download PDF</a></button>
                                                                                                                       </div>
                                                                                                       
                                                                                                                 </div>
                                                                                                               </div>
                 </div>
                 <QueryCard contacts={contacts} />  
                                                                                                             
                                                                                                               
        </>
    )
}
export default Event1;