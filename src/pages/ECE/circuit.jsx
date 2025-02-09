import React from "react";
import '../../assets/style/final.css'
import { useState } from "react";
import circuitimg from '../../assets/img/ECE/circuit.jpg'

import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaClipboardList } from "react-icons/fa";
 
import QueryCard from "../../Components/QueryCard";

function Circuit (){
    const [activeTab, setActiveTab] = useState("description");
    const contacts = [
        { name: " Mrs.C.Kannika Parameshwari ", number: "99423 63712" },
        { name: "Ms.B.Dharshini", number: "93447 18690" },
        { name: "Mr.S.Harimadesh ", number: "63690 30826" },
       
        { name: "Ms.P.Swathi ", number: "93443 47054" },
      ]
    return(
        <>
         <div className="header">
                                             <span className="primaryColor">/</span><span>Circuit Combat</span>
                                       
                                             </div>
                                             <div className="container-md">
                                             <div className="row mb-5">
                                                 <div className="col-md-5">
                                                   <div  className="box">
                                                   <img src={circuitimg} alt="Starlight Coding" />
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
                                                                   Teams of up to 2 members will compete in a written prelims (MCQ). The top 6 teams will advance to the final round, where they must locate and fix circuit faults within a time limit. All required components, schematics, and testing devices will be provided.
                                                                   </p>
                                                                   <p className="highlight">Team members: <span>Two  members</span></p>
                                                                   {/* <p className="highlight">Winners: <span>Top 3 + Best Women's team + Best First Year's team</span></p> */}
                                                               </div>
                                                           )}
                                       
                                                           {activeTab === "Rounds" && (
                                                               <div className="tab-content">
                                                                   <p>
                                                                   1. Maximum number of participants in a Team is 2. <br/>
2.Prelims (Written) shall consist of multiple choice questions.<br/>
3. Top 6 teams will be selected for Final Round in which team has to locate
the faults successfully within time limit.<br/>
4.Original Schematic diagram and faulty circuit will be given.<br/>
5. Circuit will be given on the spot.<br/>
6.All the components and material required for the circuit will be provided.<br/>
7. Power supply and other testing devices like multimeter, CRO (if needed)
will be provided.
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
                                                               <h5><FaClipboardList style={{fontSize:'16px'}} />MCQ</h5>
                                                               <p className="subtitle">What to expect?</p>
                                                           </div>
                                                           <div className="round-card">
                                                               <h5><FaMapMarkerAlt /> NPRCET Rear Block</h5>
                                                               <p className="subtitle">Location</p>
                                                           </div>
                                                           <div className="round-card">
                                                               <h5><FaCalendarAlt /> 20 February 2025</h5>
                                                               <p className="subtitle">Date</p>
                                                           </div>
                                                           {/* <div className="round-card">
                                                               <h5><FaClock /> 9:00 AM to 1:30 PM</h5>
                                                               <p className="subtitle">Duration</p>
                                                           </div> */}
                                                       </div>
                                       
                                                       {/* Round 2 */}
                                                       <div className="col-md-6">
                                                           <h3 className="round-title">Round 2</h3>
                                                           <div className="round-card">
                                                               <h5><FaClipboardList /> Circuit Challenges</h5>
                                                               <p className="subtitle">What to expect?</p>
                                                           </div>
                                                           <div className="round-card">
                                                               <h5><FaMapMarkerAlt /> NPRCET Rear Block</h5>
                                                               <p className="subtitle">Location</p>
                                                           </div>
                                                           <div className="round-card">
                                                               <h5><FaCalendarAlt /> 20 February 2025</h5>
                                                               <p className="subtitle">Date</p>
                                                           </div>
                                                           {/* <div className="round-card">
                                                               <h5><FaClock /> 9:00 PM to 6:00 AM</h5>
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
export default Circuit;