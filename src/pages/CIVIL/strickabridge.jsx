import React from "react";
import '../../assets/style/final.css'
import { useState } from "react";
import tech1 from '../../assets/img/CIVIL/strickabridge.jpg'

import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaClipboardList } from "react-icons/fa";
import Footer from "../../Footer";
import QueryCard from "../../Components/QueryCard";

function Stickabridge (){
    const [activeTab, setActiveTab] = useState("description");
    const contacts = [
        { name: "Mr.P.M.Dhureen Karthik AP", number: "9787646484" },
        { name: "Ms.A.Logarani", number: " 7603870072" },
        { name: "Mr.M. Logesh Kanna", number: "9585055491" },
       
        // { name: "Ms. P. Sruthi", number: "7604872819" },
      ];
    return(
       <>
       
               <div className="header">
                             <span className="primaryColor">/</span><span>Strick A Bridge</span>
                       
                             </div>
                             
                            <div className="container-md">
                            <div className="row mb-5">
                                 <div className="col-md-5">
                                   <div  className="box">
                                   <img src={tech1} alt="Starlight Coding" />
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
                                                   Teams will construct a bridge using only provided materials (e.g., sticks, glue, tape) within 2 hours. Pre-prepared components are not allowed. The bridge must span at least 40 cm, be 10 cm wide, and meet any height constraints. A preliminary round will be conducted. Strength will be tested by incremental loading until failure or a set limit.
                                                   </p>
                                                   <p className="highlight">Team members: <span>Maximum three participants per team</span></p>
                                                   {/* <p className="highlight">Winners: <span>Top 2 Teams</span></p> */}
                                               </div>
                                           )}
                       
                                           {activeTab === "Rounds" && (
                                               <div className="tab-content">
                                                   <p>
                                                   A preliminary round will be conducted,Teams will have 2 hours to complete their bridges.
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
                                               <h5><FaClipboardList style={{fontSize:'16px'}} />Counstruct the Bridge</h5>
                                               <p className="subtitle">What to expect?</p>
                                           </div>
                                           <div className="round-card">
                                               <h5><FaMapMarkerAlt /> Civil Department</h5>
                                               <p className="subtitle">Location</p>
                                           </div>
                                           <div className="round-card">
                                               <h5><FaCalendarAlt /> 21 Feb 2025 </h5>
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
                                       </div>
                       
                                 </div>
                               </div>
                            </div>
                            <QueryCard contacts={contacts} /> 
               </>
    );
}
export default Stickabridge;