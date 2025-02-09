import React from "react";
import '../../assets/style/final.css'
import { useState } from "react";
import avaimg from '../../assets/img/CIVIL/avatagarde.avif';

import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaClipboardList } from "react-icons/fa";
 
import QueryCard from "../../Components/QueryCard";

function Avantgarde(){
    const [activeTab, setActiveTab] = useState("description");
    const contacts = [
        { name: "Mr.N.Karthic AP", number: "9789478234" },
        { name: "Ms.M.Subanu ", number: "8015558869" },
        { name: "Mr.C.Sanjay Sivan ", number: "7010902376" },
       
        // { name: "Ms. P. Sruthi", number: "7604872819" },
      ];
    return(
        <>
        
                       
                       <div className="header">
                                     <span className="primaryColor">/</span><span>Avantgarde</span>
                               
                                     </div>
                                     <div className="container-md">
                                     <div className="row mb-5">
                                         <div className="col-md-5">
                                           <div  className="box">
                                           <img src={avaimg} alt="Starlight Coding" />
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
                                                           Avant-garde innovative, experimental, and unconventional approaches in art, design, literature, fashion, music, architecture, and other creative fields. Avant-garde challenges traditional norms, pushing boundaries to explore new ideas and perspectives.
                                                            </p>
                                                           <p className="highlight">Team members: <span>Two to three members</span></p>
                                                           {/* <p className="highlight">Winners: <span>Top 3 + Best Women's team + Best First Year's team</span></p> */}
                                                       </div>
                                                   )}
                               
                                                   {activeTab === "Rounds" && (
                                                       <div className="tab-content">
                                                           <p>
                                                           Avant-garde innovative, experimental, and unconventional approaches in art, design, literature, fashion, music, architecture, and other creative fields. Avant-garde challenges traditional norms, pushing boundaries to explore new ideas and perspectives.
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
                                                   {/* <div className="round-card">
                                                       <h5><FaClipboardList style={{fontSize:'16px'}} /> Rolling Event (30 minutes)</h5>
                                                       <p className="subtitle">What to expect?</p>
                                                   </div> */}
                                                   <div className="round-card">
                                                       <h5><FaMapMarkerAlt /> Civil Department</h5>
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
                                               {/* <div className=" col-md-6 dkFix">
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
                                                       <h5><FaCalendarAlt /> 21 March 2025</h5>
                                                       <p className="subtitle">Date</p>
                                                   </div>
                                                   <div className="round-card">
                                                       <h5><FaClock /> 9:00 AM to 1:30 PM</h5>
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
export default Avantgarde;