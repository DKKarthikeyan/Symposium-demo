
import React from "react";
import '../../assets/style/final.css'
import { useState } from "react";
import img1 from '../../assets/img/MECH/img1.jpg'

import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaClipboardList } from "react-icons/fa";
 
import QueryCard from "../../Components/QueryCard";

function Cad (){
        const [activeTab, setActiveTab] = useState("description");
        const contacts = [
            { name: " Mr.T.Balasubramani", number: "7904456047" },
            { name: "Mr. K. Balaji  ", number: "8754854295" },
            { name: ".Mr.BKarthick", number: "9952415758" },
           
            // { name: "Ms. G. Dharshana", number: "6383431307" },
          ]
    return(
        <>
        < div className="header">
                                                                                     <span className="primaryColor">/</span><span>CAD Modelingt</span>
                                                                               
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
                                                                                                           Design and create a 3D model using AutoCAD, SolidWorks, or CATIA within 60 minutes. Judged on creativity, accuracy, and presentation. Submit digital files and screenshots.
                                                                                                           </p>
                                                                                                           <p className="highlight">Team members: <span>Individual participation.</span></p>
                                                                                                          
                                                                                                       </div>
                                                                                                   )}
                                                                               
                                                                                                   {activeTab === "Rounds" && (
                                                                                                       <div className="tab-content">
                                                                                                           <p>
                                                                                                           Software Allowed: AutoCAD/SolidWorks/CATIA.<br/>
◆ Duration: 60 minutes.<br/>
✦ Judging Criteria: Creativity, Accuracy, and Presentation.<br/>
• Submission: Digital file and screenshots.
                                                                                                           </p>
                                                                                                           {/* <div className="row">
                                                                                                             <div className=" col-md-6 dkFix">
                                                                                                               <h2>ROUND 1</h2>
                                                                                                               
                                                                               
                                                                               
                                                                                                             </div>
                                                                                                             <div className=" col-md-6 dkFix">
                                                                                                               <h2>ROUND 2</h2>
                                                                                                             </div>
                                                                                                           </div> */}
                                                                                                           <div >
                                                                                           <div className="row">
                                                                                               {/* Round 1 */}
                                                                                               <div className=" col-md-6 dkFix">
                                                                                                   <h3 className="round-title">Round 1</h3>
                                                                                                   <div className="round-card">
                                                                                                       <h5><FaClipboardList style={{fontSize:'16px'}} />CAD Desing</h5>
                                                                                                       <p className="subtitle">What to expect?</p>
                                                                                                   </div>
                                                                                                   <div className="round-card">
                                                                                                       <h5><FaMapMarkerAlt /> Mechanical Department</h5>
                                                                                                       <p className="subtitle">Location</p>
                                                                                                   </div>
                                                                                                   <div className="round-card">
                                                                                                       <h5><FaCalendarAlt /> 20 Feb 2025</h5>
                                                                                                       <p className="subtitle">Date</p>
                                                                                                   </div>
                                                                                                   {/* <div className="round-card">
                                                                                                       <h5><FaClock /> 9:00 AM to 1:30 PM</h5>
                                                                                                       <p className="subtitle">Duration</p>
                                                                                                   </div> */}
                                                                                               </div>
                                                                               
                                                                                               {/* Round 2 */}
                                                                                               {/*<div className=" col-md-6 dkFix">
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
export default Cad;