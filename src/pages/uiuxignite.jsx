import React from "react";
import { useState } from "react";
import uiuxignite from '../assets/img/CSE/uiux-ignite.png';
import '../assets/style/final.css'
import { FaMapMarkerAlt, FaCalendarAlt, FaClipboardList } from "react-icons/fa";
import QueryCard from "../Components/QueryCard";


function uiuixignite() { 
    const [activeTab, setActiveTab] = useState("description");
    const contacts = [
        { name: "Mrs. C. Priyadharshini", number: "9360407403" },
        { name: "Mr A.Sankaradinesh ", number: "6380408126" },
        { name: "Ms A.Arusha Banu", number: "9087064584" },
       
        // { name: "Ms. P. Sruthi", number: "7604872819" },
      ];
    return(
        <>
         <div className="header">
              <span className="primaryColor">/</span><span>EVENTS</span>
        
              </div>
              
               <div className="container-md">
               <div className="row mb-5">
                  <div className="col-md-5">
                    <div  className="box">
                    <img src={uiuxignite} alt="Starlight Coding" />
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
                                    This is an individual competition where participants must design  using toold like Figma. The topic will be given on the spot. Creativity, originality, and visual appeal are key factors in the evaluation.  </p>
                                    <p className="highlight">Tools: <span>Figma, Adope  </span></p>
                                    <p className="highlight">Team members: <span>one member</span></p>
                                    {/* <p className="highlight">Winners: <span>Top 3 + Best Women's team + Best First Year's team</span></p> */}
                                </div>
                            )}
        
                            {activeTab === "Rounds" && (
                                <div className="tab-content">
                                    <p>
                                    Participants should focus on clear composition, effective use of color and typography, and maintaining a balanced layout.Innovative design elements and a strong conceptual approach will enhance the impact of the design.
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
                                <h5><FaClipboardList style={{fontSize:'16px'}} /> Creative Design </h5>
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
                        </div>
        
                  </div>
                </div>
                
        
               </div>
               <QueryCard contacts={contacts} />
        </>
    );
}
export default uiuixignite;