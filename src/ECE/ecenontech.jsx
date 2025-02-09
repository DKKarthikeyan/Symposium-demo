import React from "react";
import '../assets/style/event3.css';
import minuteimg from '../assets/img/ECE/minute.jpg'
import thinkimg from '../assets/img/ECE/think.jpg'
import { useNavigate } from "react-router-dom";
import QueryCard from "../Components/QueryCard";

function Ecenontech(){
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
                 <img className="event-image" src={minuteimg} alt="Starlight Coding Event" />
               </div>
               <div className="text-side">
                 <h2 className="title">&lt; A Minute To Win /&gt;</h2>
                 <p className="description pb-3">
                 A solo competition where participants must complete the given task within one minute. Test your speed and skills!
                 </p>
                 <a className="btn btn-outline-warning border-3 read-more"  onClick={() => navigate('/ece/minute')} >Read More &lt;-&gt;</a>
               </div>
             </div>
         
         
             <div className="event-container"> {/* Use class names from external CSS */}
               <div className="image-side">
               <div class="ribbon ribbon-top-right"><span>&nbsp;&nbsp;&nbsp; Exciting Rewards</span></div>
                 <img className="event-image" src={thinkimg} alt="Starlight Coding Event" />
               </div>
               <div className="text-side">
                 <h2 className="title">&lt; Think Link /&gt;</h2>
                 <p className="description pb-3">Form a team of up to 2 members and test your thinking skills in a visual round. Connect the clues and crack the challenge!
                 </p>
                 <a className="btn btn-outline-warning border-3 read-more" onClick={()=>navigate('/ece/think')}>Read More &lt;-&gt;</a>
               </div>
             </div>
            
         
             <QueryCard contacts={contacts} />
        
        </>
    )
}
export default Ecenontech;