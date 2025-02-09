import React from "react";
import '../assets/style/event3.css';
import smartclickz  from '../assets/img/CIVIL/smartclickz.jpg'
import avantgarde from '../assets/img/CIVIL/avatagarde.avif'
import { useNavigate } from "react-router-dom";
import QueryCard from "../Components/QueryCard";
 function Civilnontech() {
  const navigate = useNavigate();
  const contacts = [
    { name: "Mr. P. Manikandan", number: "9787646484" },
    { name: "Ms. M. Subanu", number: "8015558869" },
    { name: "Mr. T. Karthikeyan", number: "7010213168" },
   
    // { name: "Ms. P. Sruthi", number: "7604872819" },
  ];
 
   return (
    <>
    <h1 className='ps-5 mt-4 bigText'><i className='primaryColor'>/ </i>Events</h1>
        <div className="event-container"> {/* Use class names from external CSS */}
          <div className="image-side">
          <div class="ribbon ribbon-top-right"><span>&nbsp;&nbsp;&nbsp; Exciting Rewards</span></div>
            <img className="event-image" src={smartclickz} alt="Starlight Coding Event" />
          </div>
          <div className="text-side">
            <h2 className="title">&lt; Smart Clickz /&gt;</h2>
            <p className="description pb-3">
            "smart Clikz" could simply mean capturing images using a camera or smartphone, emphasizing the act of clicking the shutter button.
            </p>
            <a className="btn btn-outline-warning border-3 read-more"  onClick={() => navigate('/civil/smartclickz')} >Read More &lt;-&gt;</a>
          </div>
        </div>
    
    
        <div className="event-container"> {/* Use class names from external CSS */}
          <div className="image-side">
          <div class="ribbon ribbon-top-right"><span>&nbsp;&nbsp;&nbsp; Exciting Rewards</span></div>
            <img className="event-image" src={avantgarde} alt="Starlight Coding Event" />
          </div>
          <div className="text-side">
            <h2 className="title">&lt; Avantgarde /&gt;</h2>
            <p className="description pb-3">
            Avant-garde innovative, experimental, and unconventional approaches in art, design, literature, fashion, music, architecture, and other creative fields. Avant-garde challenges traditional norms, pushing boundaries to explore new ideas and perspectives.
            </p>
            <a className="btn btn-outline-warning border-3 read-more" onClick={() => navigate('/civil/avantgarde')} >Read More &lt;-&gt;</a>
          </div>
        </div>
       
        
    
    
        <QueryCard contacts={contacts} /> 
    </>
   );
}
export default Civilnontech;