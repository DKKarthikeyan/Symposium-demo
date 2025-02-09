import React from "react";
import '../../assets/style/final.css'
import { useState } from "react";
import img3 from '../../assets/img/MECH/img3.jpg'

import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaClipboardList } from "react-icons/fa";
 
import QueryCard from "../../Components/QueryCard";
function Jam (){
    const [activeTab, setActiveTab] = useState("description");
    const contacts = [
        { name: " Mr.G.Sundararajan", number: "9791557072" },
        { name: "Mr.S.Kavin  ", number: "8608715443" },
        { name: "Mr.K.Balamurugan", number: "9597526030" },
       
        // { name: "Ms. G. Dharshana", number: "6383431307" },
      ]
    return(
        <><div className="header">
                                                                             <span className="primaryColor">/</span><span>Treasure Hunt</span>
                                                                       
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
                                                                                                   <p>
                                                                                                   Teams of 3-5 members solve clues hidden around the campus. The team that solves all clues fastest wins. The event includes two rounds: Prelims & Finals.
                                                                                                   </p>
                                                                                                   <p className="highlight">Team members: <span>Three to five members</span></p>
                                                                                                   {/* <p className="highlight">Winners: <span>Top 3 + Best Women's team + Best First Year's team</span></p> */}
                                                                                               </div>
                                                                                           )}
                                                                       
                                                                                           {activeTab === "Rounds" && (
                                                                                               <div className="tab-content">
                                                                                                   <p>
                                                                                                   Team Size: 3-5 members.<br/>
Rounds: 2 rounds (Prelims & Finals).<br/>
✦ Rules: Clues hidden within the campus. No tampering with clues.<br/>
Winning Criteria: Fastest team to solve all clues.
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
                                                                                               <h5><FaClipboardList style={{fontSize:'16px'}} /> Prelims</h5>
                                                                                               <p className="subtitle">What to expect?</p>
                                                                                           </div>
                                                                                           {/*<div className="round-card">
                                                                                               <h5><FaMapMarkerAlt /> Second Floor Lab, DCSE</h5>
                                                                                               <p className="subtitle">Location</p>
                                                                                           </div>*/}
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
                                                                                       <div className=" col-md-6 dkFix">
                                                                                           <h3 className="round-title">Round 2</h3>
                                                                                           <div className="round-card">
                                                                                               <h5><FaClipboardList /> Final</h5>
                                                                                               <p className="subtitle">What to expect?</p>
                                                                                           </div>
                                                                                           {/*<div className="round-card">
                                                                                               <h5><FaMapMarkerAlt /> Ground Floor Lab, DCSE</h5>
                                                                                               <p className="subtitle">Location</p>
                                                                                           </div>*/}
                                                                                           <div className="round-card">
                                                                                               <h5><FaCalendarAlt /> 20 Feb 2025</h5>
                                                                                               <p className="subtitle">Date</p>
                                                                                           </div>
                                                                                           {/* <div className="round-card">
                                                                                               <h5><FaClock /> 9:00 AM to 1:30 PM</h5>
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
export default Jam;