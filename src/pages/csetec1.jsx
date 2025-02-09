import React from "react";
import { useState } from "react";
import codeunravelled from '../assets/img/CSE/code-unravelled1.png';
import '../assets/style/final.css'
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaClipboardList } from "react-icons/fa";
import Footer from "../Footer";
import { NavLink } from "react-router";
import QueryCard from "../Components/QueryCard";
function csetec1() {
  const [activeTab, setActiveTab] = useState("description");
  const contacts = [
    { name: "Mrs. C. Priyadharshini", number: "9360407403" },
    { name: "Mr M.Karthikeyan", number: "7339622938" },
    { name: "Ms N.Fahmitha Sirin ", number: "9943706307" },
   
    // { name: "Ms. P. Sruthi", number: "7604872819" },
  ];
  return (
    
      <>
         <div className="header">
      <span className="primaryColor">/</span><span>Code Unravelled</span>

      </div>
      <div className="container-md">
      <div className="row mb-5">
          <div className="col-md-5">
            <div  className="box">
            <img src={codeunravelled} alt="Starlight Coding" />
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
                            Teams will be given multiple pieces of code containing intentional errors,The challenge duration is 30 minutes.Participants must find and fix as many errors as possible,Points are awarded based on the total count of errors identified and fixed correctly

                            </p>
                            <p className="highlight">Programing Language <span>Python  and C for debugging</span></p>
                            <p className="highlight">Team members: <span>Maximum two participants per team</span></p>
                            {/* <p className="highlight">Winners: <span>Top 2  win the cash Price</span></p> */}
                        </div>
                    )}

                    {activeTab === "Rounds" && (
                        <div className="tab-content">
                            <p>
                            	Points are awarded based on the total count of errors identified and fixed correctly,•	Only shortlisted candidates from Round 1 will move on to this round,Participants can solve problems using any programming language of their choice.
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
                        <h5><FaClipboardList style={{fontSize:'16px'}} /> Debuging skills</h5>
                        <p className="subtitle">What to expect?</p>
                    </div>
                    <div className="round-card">
                        <h5><FaMapMarkerAlt />NPRCET main block </h5>
                        <p className="subtitle">Location</p>
                    </div>
                    <div className="round-card">
                        <h5><FaCalendarAlt /> 21 february 2025</h5>
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
                        <h5><FaClipboardList /> Coding Challenges</h5>
                        <p className="subtitle">What to expect?</p>
                    </div>
                    <div className="round-card">
                        <h5><FaMapMarkerAlt /> NPRCET Main Block</h5>
                        <p className="subtitle">Location</p>
                    </div>
                    <div className="round-card">
                        <h5><FaCalendarAlt /> 21 february 2025</h5>
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

                    

                    <button className="closed-btn" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScw5hddu82bCWz8QV-Jtm0GrBmw1_NhurNzU-jMsVJ4uM7_RA/viewform", "_blank")} >Register Now ↔</button>
                </div>

          </div>
        </div>
        
      </div>
      <QueryCard contacts={contacts}/>
      
        
      </>
      
  );
}
export default csetec1;