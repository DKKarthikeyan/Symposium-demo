import React from "react";
import './assets/style/event3.css';
import img3 from './assets/img/event1.jpg'
import img4 from './assets/img/event2.jpg'
import { useNavigate } from "react-router-dom";
import QueryCard from "./Components/QueryCard";

function Suprise(){
        const navigate = useNavigate();
        const contacts = [
          { name: " DR. P. S. SATHEESH KUMAR", number: "9566700896" },
          { name: "Mrs. Lilly Roseline Mary ", number: "8508000830" },
          { name: "Mr. Prince ", number: "8122621695" },
         
          { name: "Karthikeyan M", number: "7339622938" },
        ]
    return(
        <>
<h1 className='ps-5 mt-4 bigText fontOne'><i className='primaryColor'>/ </i> Suprise Events</h1>
                                             <div className="event-container"> {/* Use class names from external CSS */}
                                               <div className="image-side">
                                               <div class="ribbon ribbon-top-right"><span>&nbsp;&nbsp;&nbsp; Exciting Rewards</span></div>
                                                 <img className="event-image" src={img3} alt="Starlight Coding Event" />
                                               </div>
                                               <div className="text-side">
                                                 <h2 className="title">&lt; Hack Horizons /&gt;</h2>
                                                 <p className="description pb-3">
                                                 Hackathons ignite passion and prepare the next generation for the fast-paced, 
ever-evolving world of technology, ensuring they are not just participants in the industry but 
leaders of tomorrow. So fasten your seatbelts and prepare for an Hackathon adventure!

                                                 </p>
                                                 <a className="btn btn-outline-warning border-3 read-more"  onClick={() => navigate('/suprise/event1')} >Read More &lt;-&gt;</a>
                                               </div>
                                             </div>
                                         
                                         
                                             <div className="event-container"> {/* Use class names from external CSS */}
                                               <div className="image-side">
                                               <div class="ribbon ribbon-top-right"><span>&nbsp;&nbsp;&nbsp; Exciting Rewards</span></div>
                                                 <img className="event-image" src={img4} alt="Starlight Coding Event" />
                                               </div>
                                               <div className="text-side">
                                                 <h2 className="title">&lt; Ideaclum /&gt;</h2>
                                                 <p className="description pb-3">
                                                 STEP INTO THE FUTURE WITH IDEACLUM, AN EXCLUSIVE PLATFORM FOR INDIVIDUALS TO PRESENT THEIR INNOVATIVE IDEAS IN SCIENCE AND ENGINEERING. WHETHER IT’S A PIONEERING CONCEPT, A CREATIVE SOLUTION, OR AN ENGINEERING BREAKTHROUGH, THIS IS YOUR CHANCE TO
                                                 SHARE YOUR VISION WITH THE WORLD
                                                 </p>
                                                 <a className="btn btn-outline-warning border-3 read-more" onClick={()=>navigate('/suprise/event2')}>Read More &lt;-&gt;</a>
                                               </div>
                                             </div>
                                             <QueryCard contacts={contacts} />  

        </>
    )
}
export default Suprise;