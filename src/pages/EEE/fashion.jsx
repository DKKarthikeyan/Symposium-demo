import React from "react";
import '../../assets/style/final.css'
import { useState } from "react";
import img3 from '../../assets/img/EEE/img3.jpg'

import {  FaCalendarAlt, FaClipboardList } from "react-icons/fa";
 
import QueryCard from "../../Components/QueryCard";

function Fashion(){
    const [activeTab, setActiveTab] = useState("description");
    const contacts = [
        { name: "Dr. K. Rajesh ", number: "9942305401" },
        { name: "Mr. P. Anbarasan ", number: "7010591962" },
       
        { name: "Ms. J. Shiney Nesa Priya ", number: "9943520189" },
       
        // { name: "Mr. M. Bharath kumar ", number: " 6384987273" },
      ];
    return(
        <>
        <div className="header">
                                                             <span className="primaryColor">/</span><span>Wars Fashion Show</span>
                                                       
                                                             </div>

                                                             <div className="container-md">
                                                                
                                                               <div className="row mb-5">
                                                                 <div className="col-md-5">
                                                                   <div  className="box">
                                                                   <img src={img3} alt="Starlight Coding" />
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
                                                                                   <p>Tech Fusion is a dynamic symposium where experts and innovators converge to
explore cutting-edge technologies and their integration across industries. It fosters
collaboration and discussion on the latest trends and future tech solutions.
 </p>
                                                                                   <p className="highlight">Team members: <span>Two to three members</span></p>
                                                                                   {/* <p className="highlight">Winners: <span>Top 3 + Best Women's team + Best First Year's team</span></p> */}
                                                                               </div>
                                                                           )}
                                                       
                                                                           {activeTab === "Rounds" && (
                                                                               <div className="tab-content">
                                                                                   <p>
                                                                                       Internships available for top-performing candidates. Gain hands-on experience with industry experts and work on real-world projects.
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
                                                                               <h5><FaClipboardList style={{fontSize:'16px'}} /> Fashion Design</h5>
                                                                               <p className="subtitle">What to expect?</p>
                                                                           </div>
                                                                           {/* <div className="round-card">
                                                                               <h5><FaMapMarkerAlt /> Second Floor Lab, DCSE</h5>
                                                                               <p className="subtitle">Location</p>
                                                                           </div> */}
                                                                           <div className="round-card">
                                                                               <h5><FaCalendarAlt /> 21 Feb 2024</h5>
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
    )
}
export default Fashion;