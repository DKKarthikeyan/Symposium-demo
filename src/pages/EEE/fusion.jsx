import React from "react";
import '../../assets/style/final.css'
import { useState } from "react";
import img1 from '../../assets/img/EEE/img1.jpg'

import {  FaCalendarAlt,  FaClipboardList } from "react-icons/fa";
 
import QueryCard from "../../Components/QueryCard";
function Fusion (){
    const [activeTab, setActiveTab] = useState("description");
    const contacts = [
        { name: "Mr. S. Sathyamoorthi ", number: "9384338046" },
        { name: "Mr. D. Sivanesan ", number: "6385363917" },
       
        { name: "Mr. M. Vigneshvaran ", number: "6383384049" },
       
        { name: "Mr. M. Bharath kumar ", number: " 6384987273" },
      ];
    return(
        <>
        
                 <div className="header">
                                                     <span className="primaryColor">/</span><span>Tech Fusion</span>
                                               
                                                     </div>
                                                     
                                                       <div className="container-md">
                                                       <div className="row mb-5">
                                                         <div className="col-md-5">
                                                           <div  className="box">
                                                           <img src={img1} alt="Starlight Coding" />
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
                                                                           Tech Fusion is a dynamic symposium where experts and innovators converge to
explore cutting-edge technologies and their integration across industries. It fosters
collaboration and discussion on the latest trends and future tech solutions.                                                                           </p>
                                                                           <p className="highlight">Team members: <span>Only two members</span></p>
                                                                           {/* <p className="highlight">Winners: <span>Top 3 + Best Women's team + Best First Year's team</span></p> */}
                                                                       </div>
                                                                   )}
                                               
                                                                   {activeTab === "Rounds" && (
                                                                       <div className="tab-content">
                                                                           <p>

                                                                           Everyone should participate in three rounds.The decisions of judges will be announced as per the points you 
gained in each round.

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
                                                                       <h5><FaClipboardList style={{fontSize:'16px'}} />Symbol Interpretation Test</h5>
                                                                       <p className="subtitle">What to expect?</p>
                                                                   </div>
                                                                   <div className="round-card">
                                                                       <h5><FaCalendarAlt /> 21 Feb 2025</h5>
                                                                       <p className="subtitle">Date</p>
                                                                   </div>
                                                                   {/* <div className="round-card">
                                                                       <h5><FaClock /> 11.30 AM to 1:00 PM</h5>
                                                                       <p className="subtitle">Duration</p>
                                                                   </div> */}
                                                               </div>
                                               
                                                               {/* Round 2 */}
                                                               <div className="col-md-6">
                                                                   <h3 className="round-title">Round 2</h3>
                                                                   <div className="round-card">
                                                                       <h5><FaClipboardList />Simulation Mapping Test</h5>
                                                                       <p className="subtitle">What to expect?</p>
                                                                   </div>
                                                                   {/*<div className="round-card">
                                                                       <h5><FaMapMarkerAlt /> Ground Floor Lab, DCSE</h5>
                                                                       <p className="subtitle">Location</p>
                                                                   </div>*/}
                                                                   <div className="round-card">
                                                                       <h5><FaCalendarAlt /> 21 Feb 2025</h5>
                                                                       <p className="subtitle">Date</p>
                                                                   </div>
                                                                   {/* <div className="round-card">
                                                                       <h5><FaClock /> 11.30 AM to 1:00 PM</h5>
                                                                       <p className="subtitle">Duration</p>
                                                                   </div> */}
                                                               </div>
                                                               {/*round 3*/}
                                                               <div className="col-md-6">
                                                                   <h3 className="round-title">Round 3</h3>
                                                                   <div className="round-card">
                                                                       <h5><FaClipboardList />Technical quiz</h5>
                                                                       <p className="subtitle">What to expect?</p>
                                                                   </div>
                                                                   {/*<div className="round-card">
                                                                       <h5><FaMapMarkerAlt /> Ground Floor Lab, DCSE</h5>
                                                                       <p className="subtitle">Location</p>
                                                                   </div>*/}
                                                                   <div className="round-card">
                                                                       <h5><FaCalendarAlt /> 21 Feb 2025</h5>
                                                                       <p className="subtitle">Date</p>
                                                                   </div>
                                                                   {/* <div className="round-card">
                                                                       <h5><FaClock /> 11.30 AM to 1:00 PM</h5>
                                                                       <p className="subtitle">Duration</p>
                                                                   </div> */}
                                                               </div>
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
export default Fusion;