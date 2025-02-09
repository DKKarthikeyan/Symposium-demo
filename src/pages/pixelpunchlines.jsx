import React from "react";
import { useState } from "react";
import pixelimg from '../assets/img/CSE/pixel-punchlines.jpg';
import '../assets/style/final.css'
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaClipboardList } from "react-icons/fa";
import Footer from "../Footer";
import QueryCard from "../Components/QueryCard";

function Pixelpunchlines() {
     const [activeTab, setActiveTab] = useState("description");
     const contacts = [
        { name: "Ms. S. Rajeswari", number: "9360382650" },
        { name: "Mr M. Arasuthangapandi", number: "7448550223" },
        { name: "Mr. DK.Karthikeyan ", number: "8825569678" },
       
        { name: "Ms. P. Sruthi", number: "7604872819" },
      ];
    return (
        <div>
        <div className="header">
                      <span className="primaryColor">/</span><span>Pixel Punchlines</span>
                
                      </div>
                      <div className="container-md">
                        
                      <div className="row mb-5">
                          <div className="col-md-5">
                            <div  className="box">
                            <img src={pixelimg} alt="Starlight Coding" />
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
                                            A meme creation competition where the theme will be announced on the spot. Participants must create memes within the given time, focusing on creativity, humor, and relevance to the theme. They must bring their own mobile or laptop for designing.
                                            </p>
                                            <p className="highlight">Requirements: <span>Laptop & Mobile</span></p>
                                            <p className="highlight">Team members: <span>Maximum two members</span></p>
                                            {/* <p className="highlight">Winners: <span>Top 3 + Best Women's team + Best First Year's team</span></p> */}
                                        </div>
                                    )}
                
                                    {activeTab === "Rounds" && (
                                        <div className="tab-content">
                                            <p>
                                            A meme creation competition where the theme will be announced on the spot. Participants must create memes within the given time, focusing on creativity, humor, and relevance to the theme. They must bring their own mobile or laptop for designing.
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
                                        <h5><FaClipboardList style={{fontSize:'16px'}} /> Creative Thinking</h5>
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
        </div>
        
    );
}
export default Pixelpunchlines;