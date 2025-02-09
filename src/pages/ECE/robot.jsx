import React from "react";
import '../../assets/style/final.css'
import { useState } from "react";
import robotimg from '../../assets/img/ECE/robot.jpg';

import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaClipboardList } from "react-icons/fa";
 
import QueryCard from "../../Components/QueryCard";

function Robot(){
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
                                             <span className="primaryColor">/</span><span> Robot Fire</span>
                                       
                                             </div>
                                             <div className="container-md">
                                                
                                               <div className="row mb-5">
                                                 <div className="col-md-5">
                                                   <div  className="box">
                                                   <img src={robotimg} alt="Starlight Coding" />
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
                                                                   Compete in Line Follower or Dashing categories with a team of up to 2 members. Build your robot using Raspberry Pi, Arduino (UNO, Nano, Mega), ESP8266, or ESP32 with 2 or 4 wheels, powered only by battery. Control it via WiFi, Bluetooth, Preprogrammed, or RFID using an Android/iOS app. Maximum weight: 1kg. Choose your category and put your robot to the test!
                                                                   </p>
                                                                   <p className="highlight">Team members: <span>Two members</span></p>
                                                                   {/* <p className="highlight">Winners: <span>Top 3 + Best Women's team + Best First Year's team</span></p> */}
                                                               </div>
                                                           )}
                                       
                                                           {activeTab === "Rounds" && (
                                                               <div className="tab-content">
                                                                   <p>
1. There are two categories: Line Follower and Dashing<br/>
2.Participants can choose any one category<br/>
3. Maximum number of participants in a Team is 2. <br/>
4. Robots should be designed using Raspberry Pi, Arduino (UNO, Nano,
Mega), ESP8266, ESP32
5. It may be 2 wheel or 4 wheel<br/>
6.Power by battery only<br/>
7. Controlled by WiFi/Bluetooth/Preprogrammed/RFID<br/>
8. App Android/IoS App<br/>
9.Maximum weight 1Kg
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
                                                               <h5><FaClipboardList style={{fontSize:'16px'}} /> Robots War </h5>
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
export default Robot;