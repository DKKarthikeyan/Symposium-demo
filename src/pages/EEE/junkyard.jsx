import React from "react";
import '../../assets/style/final.css'
import { useState } from "react";
import img2 from '../../assets/img/EEE/img2.jpg'

import { FaCalendarAlt, FaClipboardList } from "react-icons/fa";
 
import QueryCard from "../../Components/QueryCard";

function Junkyard(){
    const [activeTab, setActiveTab] = useState("description");
    const contacts = [
        { name: "Dr. S.  Srinivasan ", number: "9486608059" },
        { name: "Mr. M. Dharani Daran ", number: "9488711983" },
       
        { name: "Mr. A. Balaji srivarsan ", number: " 8056588507" },
       
        // { name: "Mr. M. Bharath kumar ", number: " 6384987273" },
      ];
    return(
        <>
        <div className="header">
                                                             <span className="primaryColor">/</span><span>Junkyard</span>
                                                       
                                                             </div>
                                                             
                                                               <div className="container-md">
                                                               <div className="row mb-5">
                                                                 <div className="col-md-5">
                                                                   <div  className="box">
                                                                   <img src={img2} alt="Starlight Coding" />
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
                                                                                   Junkyard is an interactive symposium that challenges participants to repurpose
discarded tech materials into functional innovations. It emphasizes creativity, sustainability, and
hands-on problem-solving in a collaborative environment.                                                                                   </p>
                                                                                   <p className="highlight">Team members: <span>Only two members</span></p>
                                                                                   {/* <p className="highlight">Winners: <span>Top 3 + Best Women's team + Best First Year's team</span></p> */}
                                                                               </div>
                                                                           )}
                                                       
                                                                           {activeTab === "Rounds" && (
                                                                               <div className="tab-content">
                                                                                   <p>
                                                                                   Participants should bring their model for the event.Your innovation should focus on Eco-friendly, sustainability of 
electrical engineering.
                                                                                   </p>
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
                                                                               <h5><FaClipboardList style={{fontSize:'16px'}} />Model display</h5>
                                                                               <p className="subtitle">What to expect?</p>
                                                                           </div>
                                                                           {/*<div className="round-card">
                                                                               <h5><FaMapMarkerAlt /> Second Floor Lab, DCSE</h5>
                                                                               <p className="subtitle">Location</p>
                                                                           </div>*/}
                                                                           <div className="round-card">
                                                                               <h5><FaCalendarAlt /> 21 Feb 2025</h5>
                                                                               <p className="subtitle">Date</p>
                                                                           </div>
                                                                           {/* <div className="round-card">
                                                                               <h5><FaClock /> 10:00 AM to 11:00 AM</h5>
                                                                               <p className="subtitle">Duration</p>
                                                                           </div> */}
                                                                       </div>
                                                       
                                                                       {/* Round 2 */}
                                                                       {/*<div className="col-md-6">
                                                                           <h3 className="round-title">Round 2</h3>
                                                                           <div className="round-card">
                                                                               <h5><FaClipboardList /> Coding Challenges</h5>
                                                                               <p className="subtitle">What to expect?</p>
                                                                           </div>
                                                                           {/*<div className="round-card">
                                                                               <h5><FaMapMarkerAlt /> Ground Floor Lab, DCSE</h5>
                                                                               <p className="subtitle">Location</p>
                                                                           </div>
                                                                           <div className="round-card">
                                                                               <h5><FaCalendarAlt /> 21 Feb 2025</h5>
                                                                               <p className="subtitle">Date</p>
                                                                           </div>
                                                                           <div className="round-card">
                                                                               <h5><FaClock /> 10:00 AM to 11:00 AM</h5>
                                                                               <p className="subtitle">Duration</p>
                                                                           </div>
                                                                       </div>*/}
                                                                   </div>
                                                               </div>
                                                                               </div>
                                                                           )}
                                                       
                                                                           
                                                       
                                                       <button className="closed-btn" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScw5hddu82bCWz8QV-Jtm0GrBmw1_NhurNzU-jMsVJ4uM7_RA/viewform", "_blank")}>Register Now ↔</button>
                                                                       </div>
                                                       
                                                                 </div>
                                                               </div>
                                                               </div>
                                                               <QueryCard contacts={contacts} />
        </>
    )
}
export default Junkyard;