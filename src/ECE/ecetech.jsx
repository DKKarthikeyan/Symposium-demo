import React from "react";
import '../assets/style/event3.css';
import styled from 'styled-components';

import circuitimg from '../assets/img/ECE/circuit.jpg';
import robotimg from '../assets/img/ECE/robot.jpg';
import ppt from '../assets/img/CSE/ppt.jpg';
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import QueryCard from "../Components/QueryCard";

function Ecetech (){
     const navigate = useNavigate();
     const contacts = [
      { name: " Mr.P.Abdul Samad, ", number: "96989 69897" },
      { name: "Mr.A.G.Paranthaman", number: "90033 59679" },
      { name: "Mr.R.Hariharan ", number: "63741 50680" },
     
      { name: "Ms.P.Swathi ", number: "93443 47054" },
    ]
    
    return(
        <>
          <h1 className='ps-5 mt-4 bigText fontOne'><i className='primaryColor'>/ </i>Events</h1>
           <div className="event-container"> {/* Use class names from external CSS */}
             <div className="image-side">
             <div class="ribbon ribbon-top-right"><span>&nbsp;&nbsp;&nbsp; Exciting Rewards</span></div>
               <img className="event-image" src={circuitimg} alt="Starlight Coding Event" />
             </div>
             <div className="text-side">
               <h2 className="title">&lt; Circuit Combat /&gt;</h2>
               <p className="description pb-3">  
               Teams of up to 2 members will compete in a written prelims (MCQ). The top 6 teams will advance to the final round, where they must locate and fix circuit faults within a time limit. All required components, schematics, and testing devices will be provided.
               </p>
               <a className="btn btn-outline-warning border-3 read-more"  onClick={() => navigate('/ece/circuit')} >Read More &lt;-&gt;</a>
             </div>
           </div>
       
       
           <div className="event-container"> {/* Use class names from external CSS */}
             <div className="image-side">
             <div class="ribbon ribbon-top-right"><span>&nbsp;&nbsp;&nbsp; Exciting Rewards</span></div>
               <img className="event-image" src={robotimg} alt="Starlight Coding Event" />
             </div>
             <div className="text-side">
               <h2 className="title">&lt; Robot Fire&gt;</h2>
               <p className="description pb-3">
               Compete in Line Follower or Dashing categories with a team of up to 2 members. Build your robot using Raspberry Pi, Arduino (UNO, Nano, Mega), ESP8266, or ESP32 with 2 or 4 wheels, powered only by battery. Control it via WiFi, Bluetooth, Preprogrammed, or RFID using an Android/iOS app. Maximum weight: 1kg. Choose your category and put your robot to the test!
               </p>
               <a className="btn btn-outline-warning border-3 read-more" onClick={() => navigate('/ece/robot')} >Read More &lt;-&gt;</a>
             </div>
           </div>
           <QueryCard contacts={contacts} />
           </>
           

    )
}
export default Ecetech;